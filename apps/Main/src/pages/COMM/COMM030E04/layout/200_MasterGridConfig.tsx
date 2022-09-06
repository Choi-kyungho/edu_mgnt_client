import { ValueType } from 'realgrid';

export const Config = [
  {
    fieldName: 'user_id',
    dataType: ValueType.TEXT,
    headerText: '사용자 ID',
    width: 100,
    editable: false,
    styleName: 'TextAlignLeft',
    visible: true,
  },
  {
    fieldName: 'user_name',
    dataType: ValueType.TEXT,
    headerText: '사용자 명',
    width: 70,
    editable: false,
    visible: true,
  },
  {
    fieldName: 'user_level',
    dataType: ValueType.TEXT,
    headerText: '레벨',
    width: 110,
    editable: false,
    visible: true,
  },
  {
    fieldName: 'emp_no',
    dataType: ValueType.TEXT,
    headerText: '사원 번호',
    width: 70,
    editable: false,
    visible: true,
  },
  {
    fieldName: 'use_yn',
    dataType: ValueType.TEXT,
    headerText: '사용 여부',
    width: 60,
    editable: false,
    visible: true,
  },
  {
    fieldName: 'remark',
    dataType: ValueType.TEXT,
    headerText: '비고',
    width: 150,
    editable: false,
    styleName: 'TextAlignLeft',
    visible: true,
  },
  {
    fieldName: 'email',
    dataType: ValueType.TEXT,
    headerText: '이메일',
    width: 150,
    editable: false,
    styleName: 'TextAlignLeft',
    visible: false,
  },
  {
    fieldName: 'first_rg_idf',
    dataType: ValueType.TEXT,
    headerText: '',
    width: 100,
    editable: false,
    visible: false,
  },
  {
    fieldName: 'first_rg_yms',
    dataType: ValueType.DATETIME,
    headerText: '',
    width: 100,
    editable: false,
    visible: false,
  },
  {
    fieldName: 'last_update_idf',
    dataType: ValueType.TEXT,
    headerText: '',
    width: 100,
    editable: false,
    visible: false,
  },
  {
    fieldName: 'last_update_yms',
    dataType: ValueType.DATETIME,
    headerText: '',
    width: 100,
    editable: false,
    visible: false,
  },
  {
    fieldName: 'pwd',
    dataType: ValueType.TEXT,
    headerText: '',
    width: 100,
    editable: false,
    visible: false,
  },
  {
    fieldName: 'row_stat',
    dataType: ValueType.TEXT,
    headerText: '',
    width: 100,
    editable: false,
    visible: false,
  },
  {
    fieldName: 'tel_no',
    dataType: ValueType.TEXT,
    headerText: '',
    width: 0,
    editable: false,
    visible: false,
  },
];