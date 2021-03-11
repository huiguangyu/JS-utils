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

/**
 * 是否是爬虫
 */
export const isSpider = () => {
  return /adsbot|googlebot|bingbot|msnbot|yandexbot|baidubot|robot|careerbot|seznambot|bot|baiduspider|jikespider|symantecspider|scannerlwebcrawler|crawler|360spider|sosospider|sogou web sprider|sogou orion spider/.test(
    navigator.userAgent
  )
}

/**
 *
 * @param str 文本
 * @param type 类型 偷懒了 ts类型简写
 */
export const checkStr = (str: string, type: string) => {
  switch (type) {
    case 'phone': //手机号码
      return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str)
    case 'tel': //座机
      return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str)
    case 'card': //身份证
      return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str)
    case 'pwd': //密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
      return /^[a-zA-Z]\w{5,17}$/.test(str)
    case 'postal': //邮政编码
      return /[1-9]\d{5}(?!\d)/.test(str)
    case 'QQ': //QQ号
      return /^[1-9][0-9]{4,9}$/.test(str)
    case 'email': //邮箱
      return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str)
    case 'money': //金额(小数点2位)
      return /^\d*(?:\.\d{0,2})?$/.test(str)
    case 'URL': //网址
      return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(
        str
      )
    case 'IP': //IP
      return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(
        str
      )
    case 'date': //日期时间
      return (
        /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(
          str
        ) || /^(\d{4})\-(\d{2})\-(\d{2})$/.test(str)
      )
    case 'number': //数字
      return /^[0-9]$/.test(str)
    case 'english': //英文
      return /^[a-zA-Z]+$/.test(str)
    case 'chinese': //中文
      return /^[\\u4E00-\\u9FA5]+$/.test(str)
    case 'lower': //小写
      return /^[a-z]+$/.test(str)
    case 'upper': //大写
      return /^[A-Z]+$/.test(str)
    case 'HTML': //HTML标记
      return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str)
    default:
      return true
  }
}
