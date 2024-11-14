/*
 * @Author: wangqz
 * @Date: 2024-11-14
 * @LastEditTime: 2024-11-14
 * @Description: content
 */

import type { DataTableColumns, DataTableCreateSummary } from 'naive-ui';
import type { SummaryCell } from 'naive-ui/es/data-table/src/interface';
import { h, type VNodeChild } from 'vue';
import { Money, sortDate, sortNumber, sortString, tableMoney } from '../utils/numberUtils';

export interface R01Data {
  id: number;
  billdate: string;
  name: string;
  phone: string;
  sales: number;
  payment: number;
  address: string;
  state: number;
}

export const createColumns = (action: () => VNodeChild): DataTableColumns<R01Data> => {
  const test = [] as DataTableColumns<R01Data>;
  for (let i = 0; i < 50; i++) {
    test.push({
      title: '单据日期' + i,
      key: 'billdate' + i,
      width: 100,
    });
  }
  return [
    {
      type: 'selection',
      fixed: 'left',
    },
    {
      title: '单据日期',
      key: 'billdate',
      sorter: sortDate('billdate'),
      width: 100,
    },
    {
      title: '姓名',
      key: 'name',
      sorter: sortString('name'),
      width: 100,
    },
    {
      title: '联系电话',
      key: 'phone',
      ellipsis: {
        tooltip: true,
      },
      width: 120,
    },
    {
      title: '销售金额',
      key: 'sales',
      width: 150,
      align: 'right',
      sorter: sortNumber('sales'),
      render: tableMoney('sales'),
    },
    {
      title: '收款金额',
      width: 100,
      key: 'payment',
      align: 'right',
      sorter: sortNumber('payment'),
      render: tableMoney('payment'),
    },
    {
      title: '地址',
      key: 'address',
      width: 160,
    },
    {
      title: '单据状态',
      key: 'state',
      width: 100,
    },
    ...test,
    {
      title: '操作',
      key: 'action',
      fixed: 'right',
      align: 'center',
      width: 80,
      render: action,
    },
  ];
};
// 定义 render 函数，其中 field 参数接受 R01Data 中的所有键
const render = <T>(pageData: T[], field: keyof T) =>
  h('span', {}, Money(pageData.reduce((prevValue, row) => prevValue + Number(row[field]), 0)));

const reduceSummary = <T>(pageData: T[], fields: (keyof T)[]) => {
  const sum = {} as { [k in keyof T]: SummaryCell };
  for (const key of fields) {
    sum[key] = { value: render(pageData, key) };
  }
  return sum;
};

export const createSummary: DataTableCreateSummary<R01Data> = (pageData) => {
  return reduceSummary(pageData, ['sales', 'payment']);
};



export const dataSorce = {
  "code": 0,
  "data": {
    "list": [
      {
        "id": 0,
        "billdate": "2020-04-03",
        "name": "Leslie",
        "phone": "603.602.2986 x040",
        "sales": 4298.373103819712,
        "payment": 3825.158554675184,
        "address": "Markets",
        "state": 7
      },
      {
        "id": 1,
        "billdate": "2022-05-26",
        "name": "Blake",
        "phone": "1-516-331-9924",
        "sales": 5144.608461574391,
        "payment": 3700.2252432016567,
        "address": "Infrastructure",
        "state": 0
      },
      {
        "id": 2,
        "billdate": "2026-11-12",
        "name": "Reign",
        "phone": "1-901-561-2840",
        "sales": 1246.5419506765406,
        "payment": 6781.814274330023,
        "address": "Data",
        "state": 2
      },
      {
        "id": 3,
        "billdate": "2024-05-18",
        "name": "Finley",
        "phone": "243.841.5490",
        "sales": 5065.0004910717,
        "payment": 6428.548132087946,
        "address": "Tactics",
        "state": 7
      },
      {
        "id": 4,
        "billdate": "2021-07-25",
        "name": "London",
        "phone": "1-564-915-3671",
        "sales": 7128.296450027916,
        "payment": 1491.1207062908038,
        "address": "Data",
        "state": 4
      },
      {
        "id": 5,
        "billdate": "2020-07-02",
        "name": "Kai",
        "phone": "1-875-758-4068 x55244",
        "sales": 5445.4069456512825,
        "payment": 5573.974464403539,
        "address": "Functionality",
        "state": 7
      },
      {
        "id": 6,
        "billdate": "2026-11-21",
        "name": "Sawyer",
        "phone": "492.425.8090 x6079",
        "sales": 4338.1314623442995,
        "payment": 4094.4280234143503,
        "address": "Configuration",
        "state": 4
      },
      {
        "id": 7,
        "billdate": "2027-04-25",
        "name": "Kendall",
        "phone": "(779) 850-0842",
        "sales": 3404.1929846128846,
        "payment": 6506.507248805036,
        "address": "Solutions",
        "state": 7
      },
      {
        "id": 8,
        "billdate": "2026-04-08",
        "name": "Shiloh",
        "phone": "427-908-8875 x69259",
        "sales": 1010.1724660139238,
        "payment": 4435.013755217315,
        "address": "Accounts",
        "state": 0
      },
      {
        "id": 9,
        "billdate": "2020-02-18",
        "name": "Sawyer",
        "phone": "348.567.2205 x2016",
        "sales": 6828.167896557168,
        "payment": 4721.503908464672,
        "address": "Research",
        "state": 0
      }
    ],
    "count": 100
  },
  "error": null,
  "message": "ok",
  "status": "success"
}