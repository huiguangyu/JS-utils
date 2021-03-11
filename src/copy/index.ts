/**
 * 劫持文本复制
 * @param value 复制的内容
 */
export const copyTextToClipboard = (value: string) => {
  var textArea = document.createElement('textarea')
  textArea.style.background = 'transparent'
  // 在此处修改value值，可添加自己的内容
  textArea.value = value
  document.body.appendChild(textArea)
  textArea.select()
  try {
    var successful = document.execCommand('copy')
  } catch (err) {
    console.log('Oops, unable to copy')
  }
  document.body.removeChild(textArea)
}
