/** 验证邮箱 */
export const isEmail = (email: string) => {
  return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(
    email
  )
}

/**
 * 验证手机号
 * 如需严格 正则为/^1[35789]{10}$/
 */
export const isMobile = (mobile: number) => {
  return /^1[0-9]{10}$/.test(mobile)
}

/**
 * 验证电话
 */
export const isPhone = (phone: number) => {
  return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(phone)
}

/**
 * @func 判断变量类型
 * @param obj 验证的变量
 * @param type 验证的变量类型 如String Number
 */
export const _instaceof = (obj: any, type: string) => {
  // typeof 可用于区分类型，但是typeof 无法区分数组和对象
  // 这里也可以用 obj instanceof type
  return Object.prototype.toString.call(obj).slice(8, -1) === type
}

/** 是否是微信环境 */
export const isWeiXin = () => {
  return navigator.userAgent.match(/microMessenger/i) == 'micromessenger'
}

/** 是否是ios环境 */
export const isIos = () => {
  var u = navigator.userAgent
  if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
    //安卓手机
    return false
  } else if (u.indexOf('iPhone') > -1) {
    //苹果手机
    return true
  } else if (u.indexOf('iPad') > -1) {
    //iPad
    return false
  } else if (u.indexOf('Windows Phone') > -1) {
    //winphone手机
    return false
  } else {
    return false
  }
}

export const isSpider = () => {
  return /adsbot|googlebot|bingbot|msnbot|yandexbot|baidubot|robot|careerbot|seznambot|bot|baiduspider|jikespider|symantecspider|scannerlwebcrawler|crawler|360spider|sosospider|sogou web sprider|sogou orion spider/.test(
    ua
  )
}
