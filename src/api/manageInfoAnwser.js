import axios from "@/utils/axio";

export function insertAnwser(data) {
  return axios({
    url: "/InfoAnwser",
    method: "post",
    data: { detail: data.detail },
  }).then((res) => {
    axios({
      url: res._links.infoQuestion.href,
      method: "put",
      headers: { "Content-Type": "text/uri-list" },
      data: data.infoQuestion._links.self.href,
    });
  });
}

export function getAnwser(param) {}

export function deleteAnwser(id) {
  return axios({
    url: "/InfoAnwser/" + id,
    method: "delete",
  });
}
