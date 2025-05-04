const Debouncing = () => {


    function debounce(func, delay) {
        let timeoutId;
        return function (...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(this, args)
            }, delay);
        }
    }


    function logMsg(msg) {
        console.log(msg);

    }
    const debounceLogMsg = debounce(logMsg, 1000)
    debounceLogMsg("hello");
    debounceLogMsg("Hello world")

}


export default Debouncing;