/**
 * 页面是否见底
 */

const isLoad = (discout: number) => {
  return (
    document.documentElement.clientHeight + window.screenTop - discout >
    document.documentElement.clientHeight
  )
}
