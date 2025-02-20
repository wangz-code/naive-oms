import { MD5 } from 'crypto-js';
import type { DataTableBaseColumn, DataTableColumnKey, DataTableColumns } from 'naive-ui';
import type { Sorter } from 'naive-ui/es/data-table/src/interface';
import type { VNodeChild } from 'vue';

type Columns = DataTableColumns<any>;
type Config = Array<{
  key: DataTableColumnKey;
  title: string | undefined;
  show: boolean;
  column: DataTableBaseColumn;
  order: number;
}>;
type Call = {
  render: (rowData: any, rowIndex: number) => VNodeChild;
  sorter: boolean | Sorter | 'default';
};
type TableState = {
  tables: {
    [x: string]: { config: Config; field: string };
  };
  fn: { [x: string]: { [key: DataTableColumnKey]: Call } };
};

const getField = (columns: Columns) => {
  return MD5(JSON.stringify(columns)).toString();
};
const setCols = (columns: Columns, config: Config) => {
  const getShow = (key: string) => {
    if (!config.length) return true;
    const isFind = config.find((item) => item.key == key);
    if (isFind) return isFind.show;
    return true;
  };
  const cfg: Config = [];
  for (let i = 0; i < columns.length; i++) {
    const item = columns[i] as DataTableBaseColumn;
    const key = String(item.key || item.type);
    cfg.push({
      order: i,
      key,
      title: item.title as string | undefined,
      show: getShow(key),
      column: item,
    });
  }
  return cfg;
};
const LocalKey = 'APP_TableCols_STORE';
export const useTableColStore = {
  state: {
    tables: {},
    fn: {},
  } as TableState,
  /** 每个用户使用不同的缓存id */
  getID(uid: string) {
    return uid;
  },
  /** 配置列配置 */
  setColsConfig(uid: string, config: Config, field?: string) {
    const { state, getID } = useTableColStore;
    const id = getID(uid);
    state.tables[id]!.config = config;
    if (field) state.tables[id]!.field = field;
    const cash = JSON.stringify(state);
    localStorage.setItem(LocalKey, cash);
  },
  /** 1.初始化列配置 */
  initTableCols(uid: string, columns: Columns) {
    const { state, setColsConfig } = useTableColStore;
    if (!Object.keys(state.tables).length && localStorage.getItem(LocalKey)) {
      useTableColStore.state = JSON.parse(localStorage.getItem(LocalKey));
    }
    const id = useTableColStore.getID(uid);
    const cols = useTableColStore.state.tables[id];

    // 缓存render
    if (!state.fn[id]) state.fn[id] = {};
    const fnObj = state.fn[id]!;
    const field = getField(columns);
    for (const item of columns as DataTableBaseColumn[]) {
      const call = {} as Call;
      if (item.render) call.render = item.render;
      if (item.sorter) call.sorter = item.sorter;
      if (Object.keys(call).length) fnObj[item.key] = call;
    }
    if (cols) {
      // 检查字段变化 更新缓存
      if (cols.field != field) setColsConfig(uid, setCols(columns, cols.config), field);
      for (const item of cols.config) {
        if (fnObj[item.key]) {
          const call = fnObj[item.key]!;
          if (call.render) item.column.render = call.render;
          if (call.sorter) item.column.sorter = call.sorter;
        }
      }
      return cols.config;
    }
    state.tables[id] = { config: setCols(columns, []), field };
    return state.tables[id]!.config;
  },

  /** 重置 */
  resetTableCols(uid: string) {
    delete useTableColStore.state.tables[uid];
  },
  /** 清理 */
  cleanTableCols() {
    useTableColStore.state.tables = {};
  },
};
