"use strict";
/**
 * 判断数字是否为整数,且无小数位
 */
const isInterge = (num) => {
    return Math.round(num) === num && !num.toString().includes('.');
};
