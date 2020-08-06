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
