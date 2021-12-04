// let arr1 = []; //array
// let obj = {}; //object
// // console.log(typeof arr1);
// // console.log(arr1.length);
// arr1 = [10, true, 1, 'unknown', ['A', 'B', 'C'], { id: 1, name: 'Adam' }]; //array is untyped
// console.log(arr1[arr1.length - 1]);

// console.log(arr1[arr1[2]]); // [integer expression]

// console.log(arr1[4][2]);

// console.log(arr1[5].name);

// arr1[4][0] = 'X';
// console.log(arr1[4]);
// arr1[0] = 20;
// console.log(arr1);
// //spread operator
// let arr2 = ['confirm', ...arr1];
// console.log(arr2);

// let arr3 = 'hello world';
// let arr4 = [...arr3];
// console.log(arr4.length);

//include object variable  in array with spread operator

let per1 = [{ id: 1, name: 'Adam' }];
let arr1 = [...per1];
// let arr1 = [{...per1}];

arr1[0].name = 'Joe';
console.log(per1);

//include primitive variable in array with spread operator
let num1 = [10];
let arr2 = [...num1];

arr2[0] = 20;
console.log(num1);