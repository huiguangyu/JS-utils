/**
 * 数据加载
 * @param: discout 距离页面底部的距离
 */

const isLoad = (discout: number) => {
  return (
    window.screen.height + document.documentElement.scrollTop - discout >
    document.documentElement.clientHeight
  )
}
