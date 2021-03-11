/**
 * 布尔全等判断
 */
declare const all: (arr: Array<number>, fn?: any) => void;
/**
 * 检查数组各项相等
 */
declare const allEqual: (arr: Array<any>) => void;
/**
 * 求平均数
 */
declare const average: (arr: Array<number>) => number;
/**
 * 类数组转数组
 */
declare var castArray: (arr: IArguments) => any[];
/**
 * 过滤数组无用值
 */
declare var compact: (arr: Array<any>) => void;
/**
 * 某个数值的出现次数
 */
declare var countItem: (arr: Array<any>, val: any) => void;
/**
 * 扁平化数组
 */
declare var deepFlatten: (arr: Array<any>) => void;
/**
 * 删除不符合逻辑的项
 */
declare var toFileter: (arr: Array<any>, fn: any) => any[];
/**
 * 两数组的交集
 */
declare var intersection: (a: Array<any>, b: Array<any>) => any[];
