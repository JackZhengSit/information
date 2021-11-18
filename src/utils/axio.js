/*
 * @Description:
 * @Version: 0.0.0
 * @Autor: JackZheng
 * @Date: 2020-12-02 08:45:42
 * @LastEditTime: 2021-01-04 09:27:40
 */
import axios from "axios";
import router from "../router";
import { Message, MessageBox } from "element-ui";
import baseUrl from "@/config/baseUrl";

const service = axios.create({
  timeout: 10000
});

service.defaults.headers.post["Content-Type"] =
  "application/json;charset=UTF-8";

service.defaults.baseURL = baseUrl;

// // 环境的切换
// if (process.env.NODE_ENV == "development") {
//   service.defaults.baseURL = "http://localhost:9000";
// } else if (process.env.NODE_ENV == "debug") {
//   service.defaults.baseURL = "http://localhost:9000";
// } else if (process.env.NODE_ENV == "production") {
//   service.defaults.baseURL = "http://localhost:9000";
// }

service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    if (200 <= response.status < 300) {
      return response.data;
    } else {
      Message({
        message: "错误：" + response.message,
        type: "error",
        duration: 5 * 1000
      });
      return Promise.reject(response);
    }
  },
  error => {
    Message({
      message: "错误：" + error.message,
      type: "error",
      duration: 5 * 1000
    });
    return Promise.reject(error).catch(error => {
      console.log(error);
      if (error.response.data) {
        Message({
          message: "错误：" + error.response.data.message,
          type: "error"
        });
      }
      return Promise.reject(error);
    });
  }
);

export default service;
