/*
 * @Description:
 * @Version: 0.0.0
 * @Autor: JackZheng
 * @Date: 2020-12-02 08:45:42
 * @LastEditTime: 2020-12-27 21:48:23
 */
import axios from "axios";
import router from "../router";
import { Message, MessageBox } from "element-ui";

const service = axios.create({
  timeout: 10000,
});

service.defaults.headers.post["Content-Type"] =
  "application/json;charset=UTF-8";

// 环境的切换
if (process.env.NODE_ENV == "development") {
  service.defaults.baseURL = "http://localhost:8080";
} else if (process.env.NODE_ENV == "debug") {
  service.defaults.baseURL = "http://localhost:8080";
} else if (process.env.NODE_ENV == "production") {
  service.defaults.baseURL = "http://localhost:8080";
}

service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    if (200 <= response.status < 300) {
      return response.data;
    } else {
      Message({
        message: "错误：" + response.message,
        type: "error",
        duration: 5 * 1000,
      });
      return Promise.reject(response);
    }
  },
  (error) => {
    Message({
      message: "错误：" + error.message,
      type: "error",
      duration: 5 * 1000,
    });
    return Promise.reject(error).catch((error) => {
      console.log(error);
      if (error.response.data) {
        Message({
          message: "错误：" + error.response.data.message,
          type: "error",
        });
      }
      return Promise.reject(error);
    });
  }
);

export default service;

// axios.defaults.timeout = 10000;
// axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";

// // 环境的切换
// if (process.env.NODE_ENV == "development") {
//   axios.defaults.baseURL = "https://localhost:8080";
// } else if (process.env.NODE_ENV == "debug") {
//   axios.defaults.baseURL = "https://localhost:8080";
// } else if (process.env.NODE_ENV == "production") {
//   axios.defaults.baseURL = "https://localhost:8080";
// }

// axios.interceptors.request.user(
//   (config) => {
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
// //返回状态判断
// axios.interceptors.response.use(
//   (res) => {
//     if (res.status === 200) {
//       return Promise.resolve(res);
//     } else {
//       return Promise.reject(res);
//     }
//   },
//   (error) => {
//     if (error.response.status) {
//       switch (error.response.status) {
//         case 404:
//           router.replace({ path: "/home" });
//           break;
//       }
//     }
//     return Promise.reject(error.response);
//   }
// );
