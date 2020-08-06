/**
 * 数据加载
 * @param: discout 距离页面底部的距离
 */

const isLoad = (discout: number) => {
  return (
    document.documentElement.clientHeight + window.screenTop - discout >
    document.documentElement.clientHeight
  )
}
