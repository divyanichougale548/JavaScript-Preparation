const Throttling = () => {


    function throttle(func, delay) {
        let lastCall = 0;
        return function (...args) {
            const now = new Date().getTime();
            console.log("lastCall", lastCall)
            if (now - lastCall >= delay) {
                lastCall = now;
                func(...args);
            }
        };
    }

    const handleClick = throttle(() => {
        console.log("Button clicked at", new Date().toLocaleTimeString());
        // alert("Button Clicked!");
    }, 5000); // 2 seconds delay

    return (
        <button onClick={handleClick}>Click Me</button>
    )





}


export default Throttling;