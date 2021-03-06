/**
 * 布尔全等判断
 */

const all = (arr: Array<number>, fn?: any) => {
  arr.every(fn)
}
all([1, 2, 3], (x: number) => x > 1) // false
all([1, 2, 4, 5]) // true

/**
 * 检查数组各项相等
 */

const allEqual = (arr: Array<any>) => {
  arr.every((item) => item === arr[0])
}

/**
 * 求平均数
 */

const average = (arr: Array<number>) =>
  arr.reduce((total, item) => total + item) / arr.length
average([1, 2, 3, 4, 5]) // 3

/**
 * 类数组转数组
 */
var castArray = function (arr: IArguments) {
  return Array.prototype.slice.call(arr)
  // Array.from() apply() [...arr]方式都可以
}

/**
 * 过滤数组无用值
 */
var compact = function (arr: any) {
  arr.filter((item: any) => item)
}
