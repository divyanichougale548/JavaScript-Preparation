
const Polyfills =()=>{
    let name ={
        firstName:"Divyani",
        middleName:'Sunil',
        lastName:"Chougale"
    }
    let PrintFullName = function(address,pincode,country){
        console.log(this.firstName + " "+ this.middleName +" "+ this.lastName+ " " + address + " "+ pincode + " "+ country );
    }
    Function.prototype.myBind = function(...args){

        let obj = this, // this refers to PrintFullName function on which we are invoking myBind 
        params = args.slice(1); // fixed arguments provided at bind time eg kolhapur","416010"
        return function(...args2){
            //args2 represents any additional arguments passed when the bound function is actually called.
            obj.apply(args[0],[...params,...args2]); 
           
        }
    }
let printName = PrintFullName.myBind(name,"kolhapur","416010")
printName("India")
}

export default Polyfills;