module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "app-components": "./src/components/",
            "app-screens": "./src/screens/",
            "app-constants": "./src/config/constants",
            "app-routes": "./src/routes",
            "app-services": "./src/services/",
            "app-config": "./src/config/",
            "app-utils": "./src/utils/",
            "app-redux": "./src/redux/",
            "app-assets": "./src/assets/",
          },
        },
      ],
    ],
  };
};
