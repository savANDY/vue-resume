module.exports = {
  transpileDependencies: ["vuetify"],
  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();

    config.module
      .rule("svg")
      .oneOf("inline-svg")
      .resourceQuery(/inline/)
      .use("babel")
      .loader("babel-loader")
      .end()
      .use("vue-svg-loader")
      .loader("vue-svg-loader")
      .end()
      .end()
      .oneOf("file")
      .use("file-loader")
      .loader("file-loader")
      .end()
      .end();
  },
};
