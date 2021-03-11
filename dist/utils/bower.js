"use strict";
/**
 * 数据加载
 * @param: discout 距离页面底部的距离
 */
const isLoad = (discout) => {
    return (window.screen.height + document.documentElement.scrollTop - discout >
        document.documentElement.scrollHeight);
};
/**
 * 检查点击的是否是当前元素
 */
const isClickSelf = (e, target) => {
    return target.contains(e.target);
};
