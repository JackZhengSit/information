import axios from "@/utils/axio";

export function getAllRelate(params) {
  return axios({
    url: "/InfoProductRel/search/getAllRelate",
    method: "get",
    params
  });
}

export function addRelate(data) {
  return axios({
    url: "/InfoProductRel",
    method: "post",
    data
  });
}

export function deleteInfoProductRel(variable) {
  return axios({
    url: "/InfoProductRel/" + variable,
    method: "delete"
  });
}
