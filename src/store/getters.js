import state from "./state";

/*
 * @Description:
 * @Version: 0.0.0
 * @Autor: JackZheng
 * @Date: 2021-01-20 10:17:24
 * @LastEditTime: 2021-01-20 14:16:39
 */
const getters = {
  getInfoTypeField: state => {
    return [...state.infoTypeMap.keys()];
  },
  getInfoTypeTitle: state => {
    return [...state.infoTypeMap.values()];
  },
  getExteriorInfoTypeField: (state, getters) => {
    return getters.getInfoTypeField.filter(item => {
      return !item.endsWith("Interior");
    });
  },
  getInteriorInfoTypeField: (state, getters) => {
    return getters.getInfoTypeField.filter(item => {
      return item.endsWith("Interior");
    });
  },
  getExteriorInfoTypeTitle: (state, getters) => {
    let titleExterior = [];
    getters.getExteriorInfoTypeField.forEach(element => {
      titleExterior.push(state.infoTypeMap.get(element));
    });
    return titleExterior;
  },
  getInteriorInfoTypeTitle: (state, getters) => {
    let titleInterior = [];
    getters.getInteriorInfoTypeField.forEach(element => {
      titleInterior.push(state.infoTypeMap.get(element));
    });
    return titleInterior;
  }
};

export default getters;
