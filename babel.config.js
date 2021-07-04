module.exports = api => {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [

      ["dotenv-import", {
        "moduleName": "@env",
        "path": ".env",
        "blacklist": null,
        "whitelist": null,
        "safe": false,
        "allowUndefined": false
      }],
      [
        'module-resolver',
        {
          root: ['.'],
          extensions: [
            '.ios.ts',
            '.android.ts',
            '.ts',
            '.ios.tsx',
            '.android.tsx',
            '.tsx',
            '.jsx',
            '.js',
            '.json',
          ],
          alias: {
            '@components': ['./src/components'],
            '@containers': ['./src/containers'],
            '@size': ['./src/components/Size'],
            '@services': ['./src/services'],
            '@middlewares': ['./src/middlewares'],
            '@images': ['./src/assets/images'],
            '@video': ['./src/assets/video'],
            '@utils': ['./src/utils'],
            '@store': ['./src/store'],
            '@theme': ['./src/theme']
          },
        },
      ],
    ],
  };
};