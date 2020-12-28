/*
 * @Description:
 * @Version: 0.0.0
 * @Autor: JackZheng
 * @Date: 2020-12-28 09:24:36
 * @LastEditTime: 2020-12-28 09:26:32
 */

//camel to underline
export function toLine(name) {
  if (name == null) return name;
  return name.replace(/([A-Z])/g, "_$1").toLowerCase();
}
