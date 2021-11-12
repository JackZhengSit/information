import axios from "@/utils/axio";

export function getAllByImportantProduct(params){
    return axios({
    url: "/ImportantProduct/search/getAllByProductName",
    method: "get",
    params,
  });
}

export function addImportantProduct(data){
    return axios({
        url:"/ImportantProduct",
        method:"post",
        data,
    })
}

export function patchImportantProduct(id,data){
    return axios({
    url: "/ImportantProduct/"+id,
    method: "patch",
    data,
  });
}

export function deleteImportantProduct(id){
    return axios({
        url:"/ImportantProduct/"+id,
        method:"delete"
    })
}