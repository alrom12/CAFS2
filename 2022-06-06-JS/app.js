function getMaxSubSum(arr) {
    let sum = 0;
    for (item of arr) {
        // console.log(item);
        if (item > 0) {
            sum += item;
            // console.log('sum');
        }
    }
    return sum;
}

let arr = [11, -2, 34, 45, 19, 6];
console.log(getMaxSubSum(arr));
console.assert(getMaxSubSum(arr) == 115, "msg");