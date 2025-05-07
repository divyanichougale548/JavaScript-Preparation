const TypeConvrsion = () => {


    //+ operator is special — it can do both addition and string concatenation.
    console.log("5" + 2);  // "52"  (string + number → string concatenation)

    // -, *, / operators always treat both sides as numbers.
    console.log("5" - 2);  // 3    (string - number → number subtraction)

    console.log("5" * 2);  // 10   (string * number → number multiplication)
    console.log("5" / 2);  // 2.5  (string / number → number division)
    console.log("abc" - 1); // NAN

    console.log(true + 1); // 2    (true → 1)
    console.log(false + 1); // 1   (false → 0)
    console.log(null + 1); // 1    (null → 0)
    console.log(undefined + 1); // NaN (undefined → NaN)

    //-------------------------String + Anything--------------------
    console.log("Hello " + 5);       // "Hello 5"
    console.log("Age: " + true);      // "Age: true"
    console.log("Value: " + null);    // "Value: null"
    console.log("Result: " + undefined); // "Result: undefined"
    console.log("Sum: " + [1, 2, 3]);   // "Sum: 1,2,3"



    //----------------------------------  Array to String / Number----------------------
    console.log([1, 2, 3] + 4);    // "1,2,34"  (Array converted to "1,2,3", then concatenated with "4")
    console.log([] + 1);         // "1"  (empty array becomes "", then "" + 1 = "1")
    console.log([1] + 1);        // "11" (array [1] becomes "1")
    console.log([10] - 5);       // 5 (Array [10] → "10" → 10 - 5 = 5)
    console.log([1, 2] - 5);      // NaN (Array [1,2] → "1,2" → NaN - 5 = NaN)

    //----------------------------Object to Primitive (String/Number)-----------------------

    console.log({} + 1);           // "[object Object]1"
    console.log({ a: 1 } + 1);        // "[object Object]1"
    console.log({} - 1);           // NaN
    console.log({ valueOf: () => 5 } + 1); // 6 (custom object defines valueOf)

    ///----------------------------------    null and undefined-----------------
    console.log(null + 5);       // 5 (null → 0)
    console.log(undefined + 5);  // NaN (undefined → NaN)
    console.log(null * 2);       // 0
    console.log(undefined * 2);  // NaN
    //=-----------------------Comparison conversion------------------
    console.log("5" == 5);        // true  (string "5" converted to number 5)
    console.log(null == undefined); // true (special case)
    console.log(0 == false);       // true (0 and false both converted to falsey)
    console.log([] == "");         // true (empty array becomes "")
    console.log([] == 0);          // true (empty array → "" → 0)

}
export default TypeConvrsion;