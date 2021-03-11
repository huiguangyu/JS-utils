/** 获取滚动的坐标 */
export const getScrollPosition = (el: any) => ({
  x: el.scrollLeft,
  y: el.scrollTop
})

/** 滚动到顶部*/
export const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop)
    window.scrollTo(0, c - c / 8)
  }
}

/** 是否滚动到设置的底部的距离 */
const scrollToBottom = (discout: number) => {
  // 这里默认获取整个页面
  return (
    window.screen.height + document.documentElement.scrollTop - discout >
    document.documentElement.scrollHeight
  )
}
