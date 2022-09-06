/**
 * UI 개발 COMM040E01 법인 정보 등록
 * @module COMM040E01
 * seunghui
 */
import { useEffect, useRef, useState } from "react";
import {
  IResData as IHttpResData,
  useSyncHttpCient,
} from "@vntgcorp/vntg-wdk-client";
import { getDate } from "@vntgcorp/vntg-wdk-client";
import { Notify } from "@vntgcorp/vntg-wdk-client";
import { Title } from "@vntgcorp/vntg-wdk-client";
import ApiCall from "./action/API";
import { Search } from "./layout/100_SearchForm";
import MasterGrid, {
  addRow,
  getCurrentDataRow,
  getGridValues,
  setGridValue,
} from "./layout/200_MasterGrid";
import DetailForm from "./layout/210_DetailForm";
import Template from "./layout/Template";
import { FormProps, MasterGridHandler, SearchFormHandler } from "./utils/Types";

export default function COMM040E01() {
  const gridRef = useRef<MasterGridHandler>(null);
  const searchRef = useRef<SearchFormHandler>(null);
  const detailFormRef = useRef<SearchFormHandler>(null);
  const [masterRows, setMasterRows] = useState([]);
  const [selectedDataRow, setSelectedDataRow] = useState(null);
  const [, fetchRequest] = useSyncHttpCient<IHttpResData>();
  const [apiCall] = useState(new ApiCall(fetchRequest));

  /**
   * 공통 기능 초기화
   * @method onCleanup
   */
  const onCleanup = () => {
    gridRef.current.cleanup();
    searchRef.current.cleanup();
    detailFormRef.current.cleanup();
    setMasterRows([]);
  };

  /**
   * 공통 기능 저장
   * @method onSave
   */

  const onSave = () => {
    detailFormRef.current.submit();
  };

  const onDetailSubmit = () => {
    const data = getGridValues();
    if (data.length === 0) {
      return Notify.createFail();
    }

    const savableData = data.map((item) => {
      for (const key in item) {
        type ObjectKey = keyof typeof item;
        if (item[key as ObjectKey] === undefined) {
          //@ts-ignore
          item[key] = null;
        }
      }
      return item;
    });

    apiCall.save(savableData).then((result) => {
      if (result.success) {
        Notify.create();
        onRetrive();
      }
    });
  };

  /**
   * 공통 기능 조회
   * @method onRetrive
   */
  const onRetrive = async () => {
    searchRef.current.submit();
  };

  const onSubmit = (data: FormProps) => {
    const searchValue = {
      search_text: data.search_text === "" ? "%" : data.search_text,
    };

    apiCall.retrive(searchValue).then((result) => {
      console.log("조회 result.data", result.data);
      if (!result.data) {
        setMasterRows([]);
        setSelectedDataRow({});
        return Notify.notfound("법인 정보 내역");
      }

      setMasterRows(result.data || []);
      Notify.retrive();
    });
  };

  /**
   *그리드 행 추가
   */
  const AddRow = () => {
    const insertData = {
      foundation_date: getDate(new Date().toString()),
      rep_corp_yn: "N",
      row_stat: "added",
      __rowState: "created",
    };

    addRow(insertData);
  };

  const onSelectMasterRow = () => {
    const dataRow = getCurrentDataRow();
    setSelectedDataRow(dataRow);
  };

  const onSetGridValue = (name: any, value: string) => {
    let _value = value || null;
    let _name = name;
    switch (name) {
      case "rep_corp_yn@@Y": {
        _name = "rep_corp_yn";
        if (value == "true") {
          _value = "Y";
        } else {
          _value = "N";
        }
        break;
      }
      default:
        _value = value;
        break;
    }

    console.log("setGridValue, _name, _value", _name, _value, typeof _name);
    setGridValue(_name, _value);
  };

  useEffect(() => {}, []);

  return (
    <>
      {/**  공통 Title Component
       * @param {function} onCleanup 공통 초기화버튼
       * @param {function} onSave 공통 저장버튼
       * @param {function} onRetrive 공통 조회버튼
       */}
      <Template
        title={
          <Title
            onCleanup={onCleanup}
            onSave={onSave}
            onRetrive={onRetrive}
          ></Title>
        }
        searchForm={<Search onSubmit={onSubmit} ref={searchRef} />}
        leftContent={
          <MasterGrid
            originRows={masterRows}
            onSelectRow={onSelectMasterRow}
            onAddRow={AddRow}
            ref={gridRef}
            row={undefined}
          />
        }
        rightContent={
          <DetailForm
            onSubmit={onDetailSubmit}
            onSetGridValue={onSetGridValue}
            row={selectedDataRow}
            ref={detailFormRef}
            originRows={undefined}
          />
        }
      ></Template>
    </>
  );
}
