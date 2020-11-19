// ! Frequency Counter
// avoid nesting loops by breaking down arrays into objects


// const same = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) return false;

//   const frequencyCounter1 = {};
//   const frequencyCounter2 = {};
  
//   arr1.forEach(num => {
//     frequencyCounter1[num] = (frequencyCounter1[num] || 0) + 1;
//   });

//   arr2.forEach(num => {
//     frequencyCounter2[num] = (frequencyCounter2[num] || 0) + 1;
//   });

//   Object.keys(frequencyCounter1).forEach(key => {
//     if (!(key ** 2 in frequencyCounter2)) return false;
//     if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
//   });

//   return true;
// }

// console.log(same([1,2,3,2], [9,1,4,4]));


// const validAnagram = (str1, str2) => {
//   const arrayOfString1 = str1.toLowerCase().split("");
//   const arrayOfString2 = str2.toLowerCase().split("");

//   if (arrayOfString1.length !== arrayOfString2.length) return false;

//   let finalBooleanValue = true;
//   const frequencyCounter1 = {};
//   const frequencyCounter2 = {};

//   arrayOfString1.forEach(char => {
//     frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
//   });

//   arrayOfString2.forEach(char => {
//     frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
//   });

//   console.log(frequencyCounter1, frequencyCounter2);

//   Object.keys(frequencyCounter1).forEach(key => {
//     if (!(key in frequencyCounter2)) finalBooleanValue = false
//     if (frequencyCounter2[key] !== frequencyCounter1[key]) finalBooleanValue =false;
//   });

//   return finalBooleanValue;
// }

// console.log(validAnagram("aazd", "zzab"));
// console.log(validAnagram("anagram", "nagaram"));

// End of Frequency Counter 


// ! Multiple Pointers

// const sumZero = sortedArr => {
//   let pointerLeft = 0;
//   let pointerRight = sortedArr.length - 1;

//   while(pointerLeft < pointerRight) {
//     let sum = sortedArr[pointerLeft] + sortedArr[pointerRight];
//     if (sum === 0) return [sortedArr[pointerLeft], sortedArr[pointerRight]]
//     else if (sum > 0) pointerRight--;
//     else pointerLeft++;
//   }

// }

// console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]))


// const countUniqueValues = sortedArr => {
//   if (sortedArr.length === 0) return 0;

//   let pointerOne = 0;

//   for(let pointerTwo = 1; pointerTwo < sortedArr.length; pointerTwo++) {
//     if (sortedArr[pointerOne] !== sortedArr[pointerTwo]) {
//       pointerOne++;
//       sortedArr[pointerOne] = sortedArr[pointerTwo];
//     }
//   }

//   return pointerOne + 1;

// }

// console.log(countUniqueValues([1,1,1,1,2]))
// console.log(countUniqueValues([1,1,1,2,3,3,4,4,5,6]))


// ! Sliding Window

// const maxSubArraySum = (arr, num) => {
//   let maxSum = 0;
//   let tempSum = 0
  
//   if (arr.length < num) return null;
//   for (let i = 0; i < num; i++) {
//     maxSum += arr[i];
//   }
//   tempSum = maxSum;
//   for (let i = num; i < arr.length; i++) {
//     tempSum = tempSum - arr[i - num] + arr[i];
//     maxSum = Math.max(maxSum, tempSum);
//   }

//   return maxSum;

// }


// ! Divide and Conquer 

// Binary Search 

// const binarySearch = (arr, val) => {
//   let min = 0;
//   let max = arr.length - 1;

//   while (min <= max) {
//     let middle = Math.floor((min + max) / 2);
//     let currentElement = arr[middle];

//     if (arr[middle] < val) min = middle -1;
//     else if (arr[middle] > val) max = middle -1;
//     else return middle;
//   }

//   return -1;

// }



// ? Frequency Counter


// const sameFrequency = (num1, num2) => {
  //   const num1String = num1.toString();
  //   const num2String = num2.toString();
  //   if (num1String.length !== num2String.length) return false;
  
  //   const counterObjForNum1 = {}
  //   const counterObjForNum2 = {}

//   for (const character of num1String) {
//     if (!counterObjForNum1[character]) counterObjForNum1[character] = 1;
//     else counterObjForNum1[character]++;
//   }

//   for (const character of num2String) {
//     if (!counterObjForNum2[character]) counterObjForNum2[character] = 1;
//     else counterObjForNum2[character]++;
//   }

//   for (const key in counterObjForNum1) {
//     if (counterObjForNum1[key] !== counterObjForNum2[key]) return false;
//   }
  
//   return true;

// }

// console.log(sameFrequency(111, 112));
// console.log(sameFrequency(123, 1234));



// ? Frequency Counter or Multiple Pointers - are there duplicates


// const areThereDuplicates = (...args) => {
//   const refObj = {};

//   for (const val of args) {
//     if (refObj[val]) return true;
//     refObj[val] = val;
//   }

//   return false;

// }

// areThereDuplicates(1,2,3);

// console.log(areThereDuplicates(1,1,1));
// console.log(areThereDuplicates(1,2,3));
// console.log(areThereDuplicates("a","b"))
// console.log(areThereDuplicates("a","a"));


// ? Multiple Pointers - averagePair


// const averagePair = (arr, targetAvg) => {
//   if (!arr.length) return false;
  
//   let pointerLeft = 0;
//   let pointerRight = arr.length - 1;

//   while ( pointerLeft < pointerRight) {
//     let testAvg = Math.floor(arr[pointerLeft] + arr[pointerRight]) / 2;
//     console.log(testAvg, targetAvg);
//     if (testAvg === targetAvg) return true; 
//     else if (testAvg > targetAvg) pointerRight--;
//     else pointerLeft++; 
//   }

//   return false;

// }

// console.log(averagePair([1,2,3], 2.5))


// ? Multiple Pointers - isSubsequence 


// const isSubsequence = (str1, str2) => {

//   let str1Pointer = 0;
//   let checkerStr = "";

//   for (let secondPointer = 0; secondPointer < str2.length; secondPointer++) {
//     if (str1[str1Pointer] === str2[secondPointer]) {
//       str1Pointer++;
//       checkerStr = checkerStr + str2[secondPointer];
//     }
//   }

//   if (checkerStr === str1) return true;
//   return false;
// }

// isSubsequence("sing", "sting");
// isSubsequence("abc", "acb");


// ? Sliding Window - maxSubArraySum

// const maxSubarraySum = (arr, num) => {
//   if (arr.length < num) return null;
//   let maxSum = 0;
//   let tempSum = 0;

//   for (let i = 0; i < num; i++) {
//     maxSum += arr[i];
//   }

//   tempSum = maxSum;

//   for (let x = num; x < arr.length; x++){
//     tempSum = tempSum - arr[x - num] + arr[x]
//     console.log(tempSum, maxSum);
//     if (tempSum > maxSum) maxSum = tempSum;
//   }

//   return maxSum;

// }

// maxSubarraySum([-3,4,0,-2,6,-1], 2)


// const minSubArrayLen = (arr, num) => {
//   let sum = arr.reduce((total, current) => total + current);
//   if (sum < num) return 0;

//   let leftPointer = 0;
//   let rightPointer = arr.length - 1;
//   let minLength = arr.length

//   while (leftPointer < rightPointer) {
//     if (sum < num) return minLength;

//     if (arr[leftPointer] <= arr[rightPointer]) {
//       sum = sum - arr[leftPointer];

//       if (sum < num) return minLength;

//       minLength--;
//       leftPointer++;
//     } else {
//       sum = sum - arr[rightPointer];
      
//       if (sum < num) return minLength;

//       minLength--;
//       rightPointer--;
//     }

//   }

//   return minLength;

// }

// console.log(minSubArrayLen([2,3,1,2,4,3], 7))



const findLongestSubstring = (str) => {

  let objCounter = {};
  let objKey = 0;
  let longestString = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      objKey += 1;
      objCounter[objKey] = 1;
    } else {
      if (!objCounter[objKey]) objCounter[objKey] = 1;
      else objKey[objKey] += 1;
    }
  }

  for (const key in objCounter) {
    console.log(objCounter[key], longestString)
    if (objCounter[key] > longestString) longestString = objCounter[key];
  }

  return longestString;

}


console.log(findLongestSubstring('bbbbbbbbb'))
console.log(findLongestSubstring('rithmschool'))

