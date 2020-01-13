export const getEntities = () => {
  try {
    const contexts = require.context('src/modules/', true, /\.entity.ts$/);
    return contexts
      .keys()
      .map((path: string) => contexts(path))
      .reduce(
        (res: any[], module: any) =>
          res.concat(Object.keys(module).map(key => module[key])),
        []
      );
  } catch (e) {
    return ['src/**/**.entity{.ts,.js}'];
  }
};
