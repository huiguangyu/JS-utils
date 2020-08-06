/**
 * 判断数字是否为整数,且无小数位
 */

const isInterge = (num: number) => {
  return Math.round(num) === num && !num.toString().includes('.')
}
