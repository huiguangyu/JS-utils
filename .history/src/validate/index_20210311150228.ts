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
  // 这里也可以用instanceof obj === type
  return Object.prototype.toString.call(obj).slice(8, -1) === type
}
