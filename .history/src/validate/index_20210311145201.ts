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
 * 如需严格 正则为/^1[35789]{10}$/
 */
export const isPhone = (phone: number) => {
  return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(phone)
}
