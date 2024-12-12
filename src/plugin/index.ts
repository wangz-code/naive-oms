/**
 * @oms/naive Resolver 方便自动导入
 */
export function OmsCompountResolver() {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.match(/^(Oms[A-Z]|oms-[a-z])/)) return { name, from: '@oms/naive' };
    },
  };
}
