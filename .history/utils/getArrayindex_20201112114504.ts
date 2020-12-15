function getIndex = (arr: SVGAnimatedNumberList[]) => { 
  let index = null, min = null
  arr.forEach((item: any, i:number) => {
    if (item > 0) { 
      if (min && item < min) {
        index = i
        min = item
      }
      if (!min) { 
        min = item
      }
    }
  });
  return index
}