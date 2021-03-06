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
var castArray = (arr: IArguments) => {
  return Array.prototype.slice.call(arr)
  // Array.from() apply() [...arr]方式都可以
}

/**
 * 过滤数组无用值
 */
var compact = (arr: Array<any>) => {
  arr.filter((item: any) => item)
}

/**
 * 某个数值的出现次数
 */
var countItem = (arr: Array<any>, val: any) => {
  arr.reduce((c: number, v: any) => (v === val ? c + 1 : c), 0)
}

/**
 * 扁平化数组
 */
var deepFlatten = (arr: Array<any>) => {
  ;[].concat(...arr.map((v: any) => (Array.isArray(v) ? deepFlatten(v) : v)))
}

/**
 * 删除不符合逻辑的项
 */
var toFileter = (arr: Array<any>, fn: any) => {
  return arr.filter((v: any) => fn(v))
}

/**
 * 两数组的交集
 */
var intersection = (a: Array<any>, b: Array<any>) => {
  const s = new Set(b)
  return a.filter((v) => s.has(v))
}
