const originalArray = [1, 2, 3, 4, 5];

// const reversedArray= originalArray.reverse()
// console.log(reversedArray);

// const reversedArray = [...originalArray].reverse();
// console.log(reversedArray);

// let reversedArray = [];
// let i= originalArray.length-1;
// while(i>=0){
//     reversedArray.push(originalArray[i])
//     i--;
//     console.log(reversedArray);
// }
// console.log(reversedArray);

// let reversedArray = [];
// for(var i=originalArray.length-1; i>=0; i--){
//     reversedArray.push(originalArray[i]);
//     console.log(reversedArray);
// }
// console.log(reversedArray);


let reversedArray =[];
for(var item of originalArray){
    reversedArray.unshift(item)
}
console.log(reversedArray);

