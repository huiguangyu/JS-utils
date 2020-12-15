function getIndex() { }
(function (arr) {
    var index = null, min = null;
    arr.forEach(function (item, i) {
        if (item > 0) {
            if (min && item < min) {
                index = i;
                min = item;
            }
            if (!min) {
                min = item;
            }
        }
    });
    return index;
});
