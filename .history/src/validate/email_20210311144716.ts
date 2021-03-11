export const isEmail = (eamil: string) => {
  if (!eamil) return
  return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(
    eamil
  )
}
