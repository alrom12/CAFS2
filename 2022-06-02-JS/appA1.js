for (let x = 9; x >= 1; x--) {
    console.log("hello " + x); 
}


var arr = [];
arr[0] = "Jani";
arr[1] = "Hege";
arr[2] = "Stale";
arr[3] = "Kai Jim";
arr[4] = "Borge";

console.log(arr.join()); // Jani,Hege,Stale,Kai Jim,Borge
arr.splice(8, 0, "Lene");
console.log(arr.join()); // Jani,Hege,Lene,Stale,Kai Jim,Borge
console.log(arr);





// let x = 9;

// while (x >= 1) {

//   console.log("hello " + x);

//   x = x - 1;

// }