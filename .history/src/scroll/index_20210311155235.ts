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

/** 元素是否在视口范围内 */

export const elementIsVisibleInViewport = (
  el: any,
  partiallyVisible: boolean
) => {
  const { top, left, bottom, right } = el.getBoundingClientRect()
  const { innerHeight, innerWidth } = window
  return partiallyVisible
    ? ((top > 0 && top < innerHeight) ||
        (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth
}
