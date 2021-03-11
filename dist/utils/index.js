"use strict";
/**
 * 布尔全等判断
 */
const all = (arr, fn) => {
    arr.every(fn);
};
all([1, 2, 3], (x) => x > 1); // false
all([1, 2, 4, 5]); // true
/**
 * 检查数组各项相等
 */
const allEqual = (arr) => {
    arr.every((item) => item === arr[0]);
};
/**
 * 求平均数
 */
const average = (arr) => arr.reduce((total, item) => total + item) / arr.length;
average([1, 2, 3, 4, 5]); // 3
/**
 * 类数组转数组
 */
var castArray = (arr) => {
    return Array.prototype.slice.call(arr);
    // Array.from() apply() [...arr]方式都可以
};
/**
 * 过滤数组无用值
 */
var compact = (arr) => {
    arr.filter((item) => item);
};
/**
 * 某个数值的出现次数
 */
var countItem = (arr, val) => {
    arr.reduce((c, v) => (v === val ? c + 1 : c), 0);
};
/**
 * 扁平化数组
 */
var deepFlatten = (arr) => {
    ;
    [].concat(...arr.map((v) => (Array.isArray(v) ? deepFlatten(v) : v)));
};
/**
 * 删除不符合逻辑的项
 */
var toFileter = (arr, fn) => {
    return arr.filter((v) => fn(v));
};
/**
 * 两数组的交集
 */
var intersection = (a, b) => {
    const s = new Set(b);
    return a.filter((v) => s.has(v));
};
