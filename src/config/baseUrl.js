/*
 * @Description:
 * @Version: 0.0.0
 * @Autor: JackZheng
 * @Date: 2021-01-04 09:22:18
 * @LastEditTime: 2021-01-22 08:43:31
 */

var baseUrl = "";
if (process.env.NODE_ENV == "development") {
  baseUrl = "http://localhost:9000";
} else if (process.env.NODE_ENV == "debug") {
  baseUrl = "http://localhost:9000";
} else if (process.env.NODE_ENV == "production") {
  baseUrl = "http://200.100.68.18:9000";
}
export default baseUrl;
