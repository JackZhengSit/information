/*
 * @Description:
 * @Version: 0.0.0
 * @Autor: JackZheng
 * @Date: 2020-12-02 08:45:42
 * @LastEditTime: 2020-12-16 14:24:07
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
    if (response.status === 200) {
      return response.data;
    } else {
      Message({
        message: response.message,
        type: "error",
        duration: 5 * 1000,
      });
      return Promise.reject(response);
    }
  },
  (error) => {
    console.log(error.response);
    Message({
      message: error.message + ":\t" + error.response.data.message,
      type: "error",
      duration: 5 * 1000,
    });
    return Promise.reject(error);
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
