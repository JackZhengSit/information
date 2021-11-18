import axios from "@/utils/axio";

export function insertQuestion(data) {
  return axios({
    url: "/InfoQuestion",
    method: "post",
    data
  });
}

export function updateQuestion(params, data) {
  return axios({
    url: "/InfoQuestion/" + params.id,
    method: "patch",
    data
  });
}

export function deleteQuestion(params) {
  return axios({
    url: "/InfoQuestion/" + params.id,
    method: "delete"
  });
}

export function getQuestion(params) {
  return axios({
    url: "/InfoQuestion",
    method: "get",
    params: params
  }).then(res => {
    return {
      page: {
        total: res.page.totalElements
      },
      result: res._embedded.infoQuestions
    };
  });
}

export function manageSearch(params) {
  return axios({
    url: "/InfoQuestion/search/manageSearch",
    method: "get",
    params: params
  }).then(res => {
    return {
      page: {
        total: res.page.totalElements
      },
      result: res._embedded.infoQuestions
    };
  });
}
