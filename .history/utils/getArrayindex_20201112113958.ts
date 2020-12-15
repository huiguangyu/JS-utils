function getIndex = (arr: any) => { 
  let index = null, min = null
  arr.forEach((item: any, i:number) => {
    if (item > 0) { 
      if (min && item < min) {
        index = i
        min = item
      }
    }
  });
  return index
}