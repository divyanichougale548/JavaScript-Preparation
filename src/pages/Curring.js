const Curring = () => {
    function multiply(a) {
        return function (b) {
            return function (c) {
                return a * b * c;
            }

        };
    }

    const double = multiply(2)(2)(2);
    console.log(double); // Output: 8


}
export default Curring