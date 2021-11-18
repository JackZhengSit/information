/*
 * @Description:
 * @Version: 0.0.0
 * @Autor: JackZheng
 * @Date: 2020-12-28 09:24:36
 * @LastEditTime: 2021-01-21 15:24:22
 */

//camel to underline

import XLSX from "xlsx";

// export function toLine(name) {
//   if (name == null) return name;
//   return name.replace(/([A-Z])/g, "_$1").toLowerCase();
// }

function replaceExcelTitleToTitle(worksheet, info) {
  for (let k1 in worksheet) {
    if (k1.endsWith(1)) {
      if (worksheet[k1].v == "id") {
        worksheet[k1].v = "";
        worksheet[k1].r = "";
        worksheet[k1].h = "";
        worksheet[k1].w = "";
      }
      for (let k2 in info) {
        if (info[k2].field == worksheet[k1].v) {
          worksheet[k1].v = info[k2].title;
          worksheet[k1].r = "<t>" + info[k2].title + "</t>";
          worksheet[k1].h = info[k2].title;
          worksheet[k1].w = info[k2].title;
        }
      }
    }
  }
}
function openDownloadDialog(url, saveName) {
  if (typeof url == "object" && url instanceof Blob) {
    url = URL.createObjectURL(url); // 创建blob地址
  }
  var aLink = document.createElement("a");
  aLink.href = url;
  aLink.download = saveName || ""; // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file:///模式下不会生效
  var event;
  if (window.MouseEvent) event = new MouseEvent("click");
  else {
    event = document.createEvent("MouseEvents");
    event.initMouseEvent(
      "click",
      true,
      false,
      window,
      0,
      0,
      0,
      0,
      0,
      false,
      false,
      false,
      false,
      0,
      null
    );
  }
  aLink.dispatchEvent(event);
}
// 将一个sheet转成最终的excel文件的blob对象，然后利用URL.createObjectURL下载
function sheet2blob(sheet, sheetName) {
  sheetName = sheetName || "sheet1";
  var workbook = {
    SheetNames: [sheetName],
    Sheets: {}
  };
  replaceExcelTitleToTitle();
  workbook.Sheets[sheetName] = sheet;
  // 生成excel的配置项
  var wopts = {
    bookType: "xlsx", // 要生成的文件类型
    bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
    type: "binary"
  };
  var wbout = XLSX.write(workbook, wopts);
  var blob = new Blob([s2ab(wbout)], { type: "application/octet-stream" });
  // 字符串转ArrayBuffer
  function s2ab(s) {
    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xff;
    return buf;
  }
  return blob;
}

exports.install = function(Vue, options) {
  Vue.prototype.tableExportMethod = function(options, info) {
    let sheet = XLSX.utils.json_to_sheet(options.data);
    replaceExcelTitleToTitle(sheet, info);
    openDownloadDialog(sheet2blob(sheet), options.filename + ".xlsx");
  };
};
