/**
 * 布尔全等判断
 */
var all = function (arr, fn) {
  arr.every(fn)
}
all([1, 2, 3], function (x) {
  return x > 1
}) // false
all([1, 2, 4, 5]) // true
/**
 * 检查数组各项相等
 */
var allEqual = function (arr) {
  arr.every(function (item) {
    return item === arr[0]
  })
}
/**
 * 求平均数
 */
var average = function (arr) {
  return (
    arr.reduce(function (total, item) {
      return total + item
    }) / arr.length
  )
}
average([1, 2, 3, 4, 5]) // 3
