// const originalArray = [1, 2, 3, 4, 5];

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


// let reversedArray =[];
// for(var item of originalArray){
//     reversedArray.unshift(item)
// }
// console.log(reversedArray);

// const reversedArray = originalArray.reduce((acc, current)=>{
//     acc.unshift(current);
//     return acc;
// }, []);

// console.log(reversedArray);

function reversedArray (arr){
    if(arr.length ===0){
        return [];
    }else {
        const [first,  ...rest] = arr;
        console.log(first);
        console.log(rest);

        return [...reversedArray(rest), first];
    }
}
console.log(reversedArray([1, 2, 3, 4, 5]));
