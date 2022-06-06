// let getHighestNumber = (...args) => Math.max(...args);
// console.log(getHighestNumber(34,7,8,55,6,7,9,52,56));

const getHighestNumber = (...nums) => {
    return Math.max(...nums);
}
console.assert(getHighestNumber(34, 7, 8, 55, 6, 7, 9, 52, 56) === 56);
console.log(getHighestNumber(34, 7, 8, 55, 6, 7, 9, 52, 56));

//   {
//     let maxNum = 0;
//     for (const num of nums) {
//       if (maxNum < num) {
//         maxNum = num;
//       }
//     }