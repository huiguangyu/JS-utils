/** 获取滚动的坐标 */
export const getScrollPosition = (el: any = window) => ({
  x: el.scrollLeft,
  y: el.scrollTop
})

const isLoad = (discout: number) => {
  return (
    window.screen.height + document.documentElement.scrollTop - discout >
    document.documentElement.scrollHeight
  )
}
