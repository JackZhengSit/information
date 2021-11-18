/*
 * @Description:
 * @Version: 0.0.0
 * @Autor: JackZheng
 * @Date: 2020-12-16 10:27:15
 * @LastEditTime: 2021-05-26 08:42:14
 */
const development = process.env.NODE_ENV !== "production";
module.exports = {
  configureWebpack: config => {
    if (development) {
      // 开发环境配置
      config.devtool = "source-map";
    }
  },
  productionSourceMap: false
};
