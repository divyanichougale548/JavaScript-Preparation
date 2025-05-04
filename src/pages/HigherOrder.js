


const HigherOrder =()=>{
    const arr = [4,1,3,8,5]
    const result = arr.reduce(function(acc,curr){
        acc = acc + curr
        return acc
    },10)
console.log(result)


const maxValue = arr.reduce(function(acc,curr){
    if(curr > acc ){

     return curr
        
    }else{
        return acc
    }
},0)
console.log(maxValue)

const findeven = arr.reduce(function(acc,curr){
    if(curr % 2 === 0){
        acc.push(curr)
    }
    return acc
        
},[])
console.log(findeven)
 
const fruits = ['banana','mango','mango','mango','mango','banana','banana','orange','orange',"watermelon",'Gava']

const count = fruits.reduce(function(acc,curr){
// acc[curr]=(acc[curr] || 0 )+ 1
// return acc
if(acc[curr]){
    acc[curr] += 1
}else{
    acc[curr] = 1
}
return acc
},{})
console.log(count)

const nested = [[1, 2], [3, 4], [5]];
const flatenArray = nested.reduce(function(acc,curr){
 const result=acc.concat(curr)
 return result
},[])

console.log(flatenArray)

const people = [
    { firstName: "John", lastName: "Doe", age: 28 },
    { firstName: "John", lastName: "Doe", age: 28 },
    { firstName: "John", lastName: "Doe", age: 28 },
    { firstName: "Jane", lastName: "Smith", age: 34 },
    { firstName: "Alice", lastName: "Johnson", age: 22 },
    { firstName: "Bob", lastName: "Williams", age: 40 }
  ];


  const findPeople = people.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age] +=1 
    }else{
        acc[curr.age] = 1
    }
    return acc
  },{})

  console.log(findPeople)

const printFirstName = people.filter((i)=>{
   return i.age < 30
}).map(function(item){
    return item.firstName
})
console.log(printFirstName)


const printFirstNameUsingReduce = people.reduce(function(arr,cur){
    if(cur.age < 30){
        arr.push(cur.firstName)
    }
    return arr
},[])
console.log(printFirstNameUsingReduce)
};


export default HigherOrder;