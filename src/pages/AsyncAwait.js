const AsyncAwait =()=>{

    // const p = new Promise((resolve)=>{
    //     setTimeout(() => {
    //         resolve(
    //             "promise Rsolved!!"
    //         )
    //     }, 2000);
    // })
    
    
    // async function handlePromise() {

    //     const val =await p;
    //     console.log("Hello world1")
    //     console.log(val)
    //     const val2 =await p;
    //     console.log("Hello world2")
    //     console.log(val2)
        
    // }
    // handlePromise()

    // const p1 = new Promise((resolve)=>{
    //     setTimeout(() => {
    //         resolve(
    //             "P1 Rsolved!!"
    //         )
    //     }, 10000);
    // })
    // const p2 = new Promise((resolve) => {
    //     setTimeout(() => {
    //         resolve(
    //             "P2 Rsolved!!"
    //         )
    //     }, 20000);
    // })
    
    // async function handlePromis() {
    //     const val =await p1;
    //     console.log(val)
    //     console.log("Hello world")

    //     const val1 =await p2;
    //     // console.log("Hello world")
    //     console.log(val1)
    // }
    // handlePromis()
const API_URL= "https://testulr";

async function handlePromise() {
    try {
        const data = await fetch(API_URL)
        const response = await data.json();
        console.log(response)     
    } catch (error) {
        console.log(error)
    }
    
}

handlePromise()
}
export default AsyncAwait;