export const reviewCode = () => {
  console.log("reviewCode,-------");
};

export var reviewCode2 = () => {
  console.log(2222);
};

/**
 * 是否为本地开发环境
 */
export const isDev = () => {
  return process.env.IS_DEV;
};

/**
 * 是否为生产环境
 */
export const isProd = () => {
  const prodReg = [
    /mama\.dxy\.com/i,
    /dxycare\.com/i,
    /elive\.dxy\.cn/i,
    /dxycare\.cn/i,
    /dxys\-mall\.dxy\.com/i, // 丁香医生接入到店
  ];
  return prodReg.some((reg) => reg.test(window.location.host));
};

/**
 * 获取 Hybrid 环境下的 host
 */
export const getHybridHost = () => {
  return window.location.origin;
};

/**
 * 是否是 iOS 环境
 */
export const isIOS = () => /(iphone|ipad)/i.test(window.navigator.userAgent);

/**
 * 是否是 iOS 11 或 12
 */
export const isIOS11or12 = () => /iPhone\sOS\s1[12]/.test(navigator.userAgent);

/**
 * 是否是 Android 环境
 */
export const isAndroid = () => /android/i.test(window.navigator.userAgent);

const ScreenSize = [
  [375, 812], // iPhone X/XS
  [414, 896], // iPhone XR/XS Max
];
/**
 * 是否是 iPhone X / iPhone XR / iPhone XS / iPhone XS Max
 */
export const isIPhoneX = () => {
  const sh = window.screen.height;
  const sw = window.screen.width;
  return (
    isIOS() &&
    ScreenSize.findIndex((item) => item[0] === sw && item[1] === sh) > -1
  );
};

/**
 * 是否为 Hybrid 环境
 * 当前 Hybrid 环境特指丁妈APP，其他业务线APP使用丁妈页面，作为H5处理
 */
export const isHybridEnv = () =>
  /dxyapp_name\/gaia/i.test(window.navigator.userAgent);

// 丁香园内部所有app环境
export const isAllAppHybridEnv = () =>
  /dxyapp_name\/(\S+)/i.test(window.navigator.userAgent);

/**
 * 是否为 丁香医生 环境
 */
export const isDoctorApp = () =>
  /dxyapp_name\/aspirin/i.test(window.navigator.userAgent);

/**
 * 是否是微信环境
 */
export const isWechat = () => {
  const { userAgent } = window.navigator;

  // 微信环境 且 非 Window 微信自带浏览器环境
  return /micromessenger/i.test(userAgent) && !/windowswechat/i.test(userAgent);
};

/**
 * 是否为移动端环境 (即 H5 与 hybrid 环境)
 * @returns false: PC 端， true: 移动端
 */
export const isMobileEnv = () => /Mobile/i.test(window.navigator.userAgent);

/**
 * 根据浏览器环境获取 App 下载地址
 */
export const getAppDownloadUrl = () => {
  return APP_STORE_DOWNLOAD;
};

/**
 * 是否是微信小程序环境
 */
export const isMiniProgram = () =>
  /miniprogram/.test(window.location.search) ||
  window.__wxjs_environment === "miniprogram";

/**
 * 是否在 丁香妈妈 小程序环境
 */
export const isDXMMiniprogram = () =>
  /miniprogramType=mama/.test(window.location.search) ||
  window.sessionStorage.getItem("globalMiniprogramEnv") === "mama";

/**
 * 判断是否在丁香家（丁香健康）小程序环境
 */
export const isDXJMiniprogram = () =>
  /miniprogramType=healthmall/.test(window.location.search) ||
  window.sessionStorage.getItem("globalMiniprogramEnv") === "healthmall";

/**
 * 判断是否在丁香医生 小程序环境
 */
export const isDXYSMiniprogram = () =>
  /miniprogramType=dxys/.test(window.location.search) ||
  window.sessionStorage.getItem("globalMiniprogramEnv") === "dxys";

/**
 * 判断是否在丁香医生 小程序tab栏
 */
export const isDXYSMiniprogramTab = () =>
  isDXYSMiniprogram() && window.location.search.includes("dxysMiniTab=1");

/**
 * 是否为 UGC 小程序（丁香妈妈plus）
 */
export const isUGCMiniprogram = () =>
  /miniprogramType=ugc/.test(window.location.search);

/**
 * 是否为丁香好物馆小程序
 */
export const isEcommerceMiniprogram = () =>
  /miniprogramType=ecommerce/.test(window.location.search);

/**
 * 判断路径是否包含 host
 * @param {string} path 需要检测的路径
 */
export const isWithHost = (path = "") =>
  [
    window.location.origin,
    "dxy.com",
    "dxy.net",
    "dxycare.com",
    "dxy.cn",
    "dxycare.cn",
  ].some((host) => path.includes(host));

/**
 * 是否使用 dxycare.com 域名
 */
export const isDxycareHost = () => /dxycare\.com/.test(window.location.host);

/**
 * 是否是丁香医生环境（用户端 App 和小程序）
 */
export const isDxys = () => isDXYSMiniprogram() || isDoctorApp();

export const isDxysByHost = () =>
  [/dxys\-mall\.dxy\.com/, /dxys\-mall\-test\.dxy\.net/].some((regexp) =>
    regexp.test(window.location.host)
  );

/**
 * 丁妈环境判别
 * @param {Function} cb  回调函数
 * @param {Function} handleNotHybridEnv  回调函数
 * @param {String} hasToast  Toast
 */
export const inHybridEnvRun = (cb, handleNotHybridEnv, hasToast = true) => {
  if (isHybridEnv()) {
    cb && cb();
  } else {
    if (handleNotHybridEnv) {
      handleNotHybridEnv();
    } else if (hasToast) {
      Toast.info("请在丁香妈妈 APP 内操作", 2);
    }
  }
};

/**
 * 是否是预渲染服务请求（用来过滤需要登录的模块）
 */
export const isPrerender = () => /prerender/i.test(window.navigator.userAgent);

/**
 * 判断是否是丁香园域名
 */
export const isDxyHost = (url) => {
  return ["dxy.net", "dxy.com", "dxy.cn", "dxycare.com", "dxycare.cn"].some(
    (host) => url.includes(host)
  );
};
