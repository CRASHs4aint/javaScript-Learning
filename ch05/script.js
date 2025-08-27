//ques 01

// function vowels(str) {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
// }
// let str = prompt("Enter a string:");

// vowels(str);

// // //question 02

// const countvowels = (stra) => {
//   let count = 0;
//   for (const char of stra) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
// };
// let stra = prompt("Enter a str:");

// countvowels(stra);

// //question 03
// let arrays = [1, 2, 3, 4, 5];

// arrays.forEach(function (arr) {
//   console.log(arr * arr);
// });

//question 4
// let marks = [12, 34, 56, 98, 91, 100];
// let toppers = marks.filter(function (mark) {
//   if (mark >= 90) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log("marks 90+:",toppers)

//ques-05
// let n=prompt("Enter a number:");

// number=[];
// for(let i=1;i<=n;i++){
//     number.push(n[i]);
// }
// console.log(number)

//question 06
const arr=[1,2,3,4];

const initialValue=0;
const sumWithIntial=arr.reduce(
    (accumulator,currentValue) => accumulator + currentValue,initialValue,
);
console.log(sumWithIntial);

//question-07
const arr1=[1,2,3,4];
const product=1;
const allProduct=arr1.reduce(
    (accumulator,currentValue)=>(accumulator*currentValue),
    product,
);
console.log(allProduct)