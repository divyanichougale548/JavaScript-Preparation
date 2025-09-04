// const This = () => {
//   //console.log(this); // Still undefined, arrow uses lexical scope, which is module-level (strict)
//   //console.log(window); // ✅ logs the window object
//   return <div></div>;
// };

// const obj = {
//   name: "Namaste JS",
//   getName: function () {
//     console.log(this); // logs the obj
//     return this.name;
//   },
//   getNameArrow: () => {
//     //console.log(this); // Still undefined, arrow uses lexical scope, which is module-level (strict)
//     return this.name;
//   },
// };
// console.log(obj.getName()); // ✅ logs "Namaste JS"
// console.log(obj.getNameArrow()); // Still undefined, arrow uses lexical scope, which is module-level (strict)

// export default This;
