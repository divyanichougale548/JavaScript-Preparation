const Promises = () => {
  // const  myPromise = new Promise((resolve,reject)=>{
  //     const success = false;
  //     setTimeout(()=>{
  //         if (success){
  //             resolve("Resolve");
  //         }else{
  //             reject("Reject")
  //         }
  //     },2000)
  // })

  // myPromise.then(result=>{
  //     console.log(result)
  // })
  // .catch(error=>{
  //     console.error(error

  //     );

  // })

  // // promise Chaning

  // function double (x){
  //     return new Promise ((resolve)=>{
  //             resolve(x * 2)
  //     })
  // }

  // double(4).then(result=>{
  // console.log(result)
  // return double(result)
  // })
  // .then(result=>{
  //     console.log(result)
  //     return double(result)
  // })
  // .then(result=>{
  //     console.log(result)
  // })

  // Chaining promises
  //  function task(message,delay){
  //     return new Promise ((resolve)=>{
  //         setTimeout(()=>{
  //             console.log(message)
  //         resolve()
  //         },delay)
  //     })
  // }
  // task("Task 1 completed",1000)
  // .then(task('Task 2 completed', 2000))
  // .then(task('Task 3 completed', 1000));

  //Chaining with Dependent Tasks
  // function fetchUserDetails(userId){
  //     return Promise.resolve({id:userId,name:"Divyani Chougale"})
  // }

  // function fetchOrderDetails(user){
  //     return  Promise.resolve([{id:1, userId:user.id},{id:2, userId:user.id},])
  // }

  // fetchUserDetails(19).then((user)=>{
  // console.log(`Name:${user.name}`)
  // return fetchOrderDetails(user)
  // })
  // .then((order)=>{
  //     console.log(`Orders:${order.length}`)
  // })

  //Promise
  // const checkEven =  new Promise((resolve,reject)=>{
  //     const num = 7;
  //     if(num % 2 === 0){
  //         resolve("No is even!");
  //     }else{
  //         reject("No is odd!")
  //     }
  //     })

  //     checkEven.then((message)=>{
  //         console.log(message)
  //     })
  //     .catch((error)=>{
  //         console.error(error);

  //     })
  //Promise.all()
  // const firstPromise = new Promise((resolve)=>{
  //     setTimeout(() => {
  //     resolve("First Promise Resolved")    
  //     }, 1000);
  // })

  // const secondePromise = new Promise((resolve)=>{
  // setTimeout(() => {
  //     resolve("Second Promise Resolved")
  // }, 2000);
  // })

  // const thirdPromise = new Promise((resolve,reject)=>{
  //     setTimeout(()=>{
  //     reject("Third Promise not resolved")
  //    },3000)
  // })

  // try {
  //     let result = Promise.all([firstPromise,secondePromise,thirdPromise])
  //     result.then((data)=>{ console.log(data)    })

  // } catch (error) {
  //     console.log(error)

  // }
  //  Promise.allSettled([
  //     Promise.resolve("A"),
  //     Promise.reject(" B"),
  //     Promise.resolve("C")
  //   ])
  //   .then(results => {
  //     results.forEach((res, index) => {
  //       console.log(`Promise ${index + 1}:`, res);
  //     });
  //   });



  // Promise Any
  //Resolves as soon as any one of the promises resolves.
  //Ignores rejections unless all of them reject.
  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Promise P1 Resolved")
      //reject("Promise P1 reject")
    }, 5000);
  });

  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      //resolve("Promise P2 resolved")
      reject("Promise P2 reject")

    }, 3000);
  })

  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("Promise P3 Resolved")
      reject("Promise P3 reject")
    }, 2000);
  })

  // Promise.all([p1, p2, p3]).then(result => {
  //   console.log(result)
  // }).catch(error => {
  //   console.error(error);
  // })
  Promise.allSettled([p1, p2, p3]).then(result => {
    console.log(result)
  }).catch(error => {
    console.error(error);
  })

  // Promise.any([p1, p2, p3]).then(result => {
  //   console.log(result)
  // }).catch(error => {
  //   console.error(error);
  // })
  //output:-Promise P3 Resolved


  //Resolves or rejects as soon as the first promise settles (either resolves or rejects).
  // Promise.race([p1, p2, p3]).then(result => {
  //   console.log(result)
  // }).catch(error => {
  //   console.error(error);

  // })
  //output:-Promise P2 Rejected

}
export default Promises;