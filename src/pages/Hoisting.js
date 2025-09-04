
const Hoisting = () => {
    function outer() {
        console.log(inner); // ✅ function: inner (hoisted declaration)

        function inner() {
            return "I'm inner!";
        }

        var inner = "I'm a string now!";
        console.log(inner); // ✅ "I'm a string now!"
    }
    outer();



    // var fn = function inner() {
    //     console.log(typeof inner); // ✅ "function"
    // };
    // fn();
    // // inner(); // ❌ ReferenceError: inner is not defined
    // function test(x = y, y = 2) {
    //     console.log(x, y);
    // }
    // test(); // ❌ ReferenceError: Cannot access 'y' before initialization


    // function example() {
    //     var x = 1;

    //     if (true) {
    //         var x = 2; // Same variable, due to function scope
    //         console.log(x); // ✅ 2
    //     }

    //     console.log(x); // ✅ 2 (not 1)
    // }
    // example()

}

export default Hoisting