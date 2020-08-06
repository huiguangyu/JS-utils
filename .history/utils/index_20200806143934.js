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
/**
 * 类数组转数组
 */
var castArray = function (arr) {
  return Array.prototype.slice.call(arr)
  // Array.from() apply() [...arr]方式都可以
}
/**
 * 过滤数组无用值
 */
var compact = function (arr) {
  arr.filter(function (item) {
    return item
  })
}
/**
 * 某个数值的出现次数
 */
var countItem = function (arr, val) {
  return arr.reduce(function (c, v) {
    v === val ? c + 1 : c
  }, 0)
}
/**
 * 扁平化数组
 */
var deepFlatten = function (arr) {
  ;[].concat.apply(
    [],
    arr.map(function (v) {
      return Array.isArray(v) ? deepFlatten(v) : v
    })
  )
}
/**
 * 删除不符合逻辑的项
 */
var toFileter = function (arr, fn) {
  return arr.filter(function (v) {
    return fn(v)
  })
}
/**
 * 两数组的交集
 */
var intersection = function (a, b) {
  var s = new Set(b)
  return a.filter(function (v) {
    return s.has(v)
  })
}
