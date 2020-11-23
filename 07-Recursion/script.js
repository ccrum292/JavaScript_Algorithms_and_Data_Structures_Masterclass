// ! CountDown

// const countDown = num => {
//   if (num <= 0) {
//     console.log("All Done!");
//     return;
//   }

//   console.log(num);
//   num--;
//   countDown(num);
// }

// countDown(5);

// const sumRange = num => {
//   if (num === 1) return 1;
//   return num + sumRange(num - 1);
// }

// const factorial = num => {
//   if (num === 1) return 1;
//   return num * factorial(num - 1);
// }


// ! Helper Method Recursion

// const collectOddValues = arr => {
//   let result = [];

//   const helper = helperInput => {
//     if (helperInput.length === 0) return;

//     if (helperInput[0] % 2 !==0) result.push(helperInput[0])

//     helper(helperInput.slice(1))
//   }

//   helper(arr)

//   return result;

// }

// ! Pure Recursion 

// const collectOddValues = arr => {
//   let newArr = [];

//   if (arr.length === 0) return newArr;

//   if (arr[0] % 2 !== 0) newArr.push(arr[0]);

//   newArr = newArr.concat(collectOddValues(arr.slice(1)));
//   return newArr
// }