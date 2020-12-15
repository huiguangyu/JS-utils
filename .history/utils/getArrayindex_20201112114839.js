function getIndex(arr) {
  let index = null,
    min = null
  arr.forEach((item, i) => {
    if (item > 0) {
      if (min && item < min) {
        index = i
        min = item
      }
      if (!min) {
        index = i
        min = item
      }
    }
  })
  return index
}
