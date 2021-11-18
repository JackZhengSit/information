/*
 * @Description:
 * @Version: 0.0.0
 * @Autor: JackZheng
 * @Date: 2021-01-27 16:52:08
 * @LastEditTime: 2021-01-28 14:15:43
 */
import ResultItem from "./ResultItem";
import SearchFormGroup from "./SearchFormGroup";

export default {
  install(Vue) {
    Vue.component("result-item", ResultItem);
    Vue.component("search-form-group", SearchFormGroup);
  }
};
