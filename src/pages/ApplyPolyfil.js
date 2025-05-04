const ApplyPolyfil =()=>{

const arr =[ 1,2,3,4,5,6,7,8];

// Array.prototype.Mymap = function(callback){
//     let arr1 =[];
//     for(let i =0; i < this.length; i++){
//      arr1.push(callback(this[i],i,this))
//     }
//     return arr1

// }

// const result = arr.Mymap((item,i)=>{
//     console.log(i,item)

// // return item > 3 && item
// return {i:item}
// })
//console.log("result",result)


// Array.prototype.Myforeach = function (callback){
//     for(let j  = 0 ; j < this.length; j++){
//         callback(this[j],j,this)
//     }
// }
// const result1 = arr.Myforeach((item,j)=>{
//     return {j:item}
// })
// console.log("result1",result1)
 

// Array.prototype.Myincludes = function(item)
// {
// for(let i = 0; i< this.length; i++){
//     if(this[i] == item){
//         return true
//     }   
// } 
// return false
// }
// const result = arr.Myincludes(19)
//  console.log("result",result)


// Array.prototype.MyFilter = function(callback){
//     let arr1 = []
//     for(let i = 0; i < this.length; i++){
//     if(callback(this[i],i,this)){
//         arr1.push(this[i])
//     }
//     }
//     return arr1
// }

// const result = arr.MyFilter((item)=>{
// return item > 3 && item 
// })
// console.log("result",result)

Array.prototype.MyReduce = function(callback,init){
    let acc = init
    
    if(acc === undefined){
        acc = this[0]
    }
    for( let i=0 ; i<this.length; i++){
        acc = callback(acc,this[i],i,this)
    }
   return acc
}
 const result = arr.MyReduce((acc,curr)=>{
    acc = acc + curr
    return acc
 },0)
 console.log("result",result)
 }
export default ApplyPolyfil;