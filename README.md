<div align='center'>
    <h1>naive-oms</h1>
</div>

<p align="center">
  <a href="https://www.npmjs.com/package/naive-oms"><img src="https://img.shields.io/npm/v/naive-oms.svg?sanitize=true" alt="Version"></a>
  <a href="https://www.npmjs.com/package/vue"><img src="https://img.shields.io/npm/l/vue.svg?sanitize=true" alt="License"></a>
  
</p>
封装了一些常用的组件 比如table, modal , 图标按钮

### 使用

```sh
pnpm i naive-oms
```

### 组件

-   table: OmsTableAsync 异步 table 封装了分页, 列拖拽,列缓存,列显隐,查询,重置,收起,选中项
-   modals: 常用的modal组件

### 基于 naive 的组件所有组件以 oms 开头,代表是公用组件 ,oms 开头是为了方便自动导入 , 内置的多语言需要在语言切换的时候调用
```ts
const setOmsLocal = (locale: Locale) => {
  i18n.global.locale.value = locale;
};
```
