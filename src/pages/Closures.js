const Clousures = () => {
  //Example 1
    function a() {
      function b(str) {
        console.log("function b called",str);
      }
      return b;
    }
    const test = a();
    const result = test("test");
    console.log("result", result);
    console.log("test", test("test"));

  //Example 2
  //   function outerFunction() {
  //     let count = 0; // 1,2, 3
  //     console.log("first time called");
  //     return function innerFunction() {
  //       count++;
  //       console.log(`Current count: ${count}`);
  //     };
  //   }

  //   const counter = outerFunction(); // outerFunction runs and returns innerFunction
  //   counter(); // ✅ "Current count: 1"
  //   counter(); // ✅ "Current count: 2"
  //   counter(); // ✅ "Current count: 3"

  // const counter1 = outerFunction();  // outerFunction runs and returns innerFunction
  // counter1(); // ✅ "Current count: 1"
  // counter1(); // ✅ "Current count: 2"
  // counter1(); // ✅ "Current count: 3"

  //   for (var i = 1; i <= 3; i++) {
  //     function print(i) {
  //       setTimeout(function () {
  //         console.log(i); // All print 4
  //       }, i * 1000);
  //     }
  //     print(i);
  //   }
//   function counter() {
//     let count = 0;
//     return {
//       inc: () => ++count,
//       dec: () => --count,
//       get: () => count,
//     };
//   }

//   const c = counter();
//   c.inc();
//   c.inc();
//   c.dec();
//   console.log(c.get());

    async function mystery(id) {
        await new Promise((r) => setTimeout(r, 1000));
        console.log(id);
    }

    for (var i = 1; i <= 3; i++) {
        mystery(i);
    }
};

export default Clousures;
