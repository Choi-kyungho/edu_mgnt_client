import { ValueType } from 'realgrid';

export const Config = [
  {
    fieldName: 'user_id',
    dataType: ValueType.TEXT,
    headerText: '사용자 ID',
    width: 100,
    editable: true,
    styleName: 'TextAlignLeft',
    visible: true,
  },
  {
    fieldName: 'user_name',
    dataType: ValueType.TEXT,
    headerText: '사용자 명',
    width: 80,
    editable: true,
    visible: true,
  },
  {
    fieldName: 'system_type',
    dataType: ValueType.TEXT,
    headerText: '시스템 구분',
    width: 120,
    editable: true,
    visible: true,
  },
  {
    fieldName: 'user_level',
    dataType: ValueType.TEXT,
    headerText: '레벨',
    width: 120,
    editable: true,
    visible: true,
  },
  {
    fieldName: 'use_yn',
    dataType: ValueType.TEXT,
    headerText: '사용 여부',
    width: 70,
    editable: false,
    visible: true,
  },
  {
    fieldName: 'emp_no',
    dataType: ValueType.TEXT,
    headerText: '사원 번호',
    width: 70,
    editable: true,
    visible: true,
  },
  {
    fieldName: 'tel_no',
    dataType: ValueType.TEXT,
    headerText: '전화 번호',
    width: 100,
    editable: true,
    visible: true,
  },
  {
    fieldName: 'email',
    dataType: ValueType.TEXT,
    headerText: '이메일',
    width: 170,
    editable: true,
    styleName: 'TextAlignLeft',
    visible: true,
  },
  {
    fieldName: 'remark',
    dataType: ValueType.TEXT,
    headerText: '비고',
    width: 150,
    editable: true,
    styleName: 'TextAlignLeft',
    visible: true,
  },
];
