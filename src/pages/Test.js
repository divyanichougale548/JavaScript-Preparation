import React from 'react';

const Test = () => {
 //-------------------Clouser----------------------
// function x(){
//   var a =7;
//   function y(){

//     console.log(a);
//     return a;
//   }
//   return y;
// }
// var z=x();
// console.log(z());
 
// };


// for(var i = 0; i<=5; i++){
//    function x (i){

//        setTimeout(() =>{
//       console.log(i);
//   }, i * 1000)
//    }
//   x(i)
// }

//-------------------------Data hiding encapsulation----------------------------
// let count = 0;
// function createCounter() {
//   // let count =10;
//   return function() {
//     return ++count;
//   };
// }

// const counter = createCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2
// };



//------------------- Event Hnadling-------------------
// console.log('Start');
// setTimeout(() => {
//   console.log('Timeout 1');
// }, 0);

// Promise.resolve().then(() => {
//   console.log('Promise 1');
//   setTimeout(() => {
//     console.log('Timeout 2');
//   }, 0);
//   return Promise.resolve();
// }).then(() => {
//   console.log('Promise 2');
// });

// console.log('End');

};
export default Test;
