/** 验证邮箱 */
export const isEmail = (email: string) => {
  return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(
    email
  )
}

/** 验证手机号 */
export const isMobile = (mobile: number) => {
  return /^1[0-9]{10}$/.test(s)
}
