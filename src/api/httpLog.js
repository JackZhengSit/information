import axios from "@/utils/axio";

export function getCount(){
  return axios({
    url: "/manual/http-log/count",
    method: "get"
  }).then(res => {
    return Promise.resolve({
      result: res
    });
  });
}
