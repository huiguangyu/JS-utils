/** 获取url参数 */
export const getQueryString = (name) => {
  const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  const search = window.location.search.split("?")[1] || "";
  const r = search.match(reg) || [];
  return r[2];
};

export const getUrlMatch = (regexPattern) => {
  // 获取当前页面的 URL
  var currentUrl = window.location.href;
  // 使用正则表达式匹配
  var matches = currentUrl.match(regexPattern);
  // 输出匹配的结果
  return matches;
};
