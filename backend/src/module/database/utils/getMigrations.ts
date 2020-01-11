export const getMigrations = () => {
  try {
    const contexts = require.context('src/modules/database/migrations/', true, /\.ts$/);
    return contexts
      .keys()
      .map((path: string) => contexts(path))
      .reduce(
        (res: any[], module: any) =>
          res.concat(Object.keys(module).map(key => module[key])),
        []
      );
  } catch (e) {
    return ['src/modules/database/migration/**{.ts,.js}'];
  }
};
