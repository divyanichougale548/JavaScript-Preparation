
const CallApplyBind =()=>{
    let name ={
        firstName:"Divyani",
        middleName:'Sunil',
        lastName:"Chougale"
    }
    let name1 ={
        firstName:"Divyani",
        middleName:'Manoj',
        lastName:"Rathod"
    }
    const PrintFullName = function(address,pincode){
        console.log(this.firstName + " "+ this.middleName +" "+ this.lastName+ " " + address + " "+ pincode);
    }
    PrintFullName.call(name,"Kolhapur",'416010')
    PrintFullName.call(name1,"Mumbai",'41102')
    PrintFullName.apply(name,["Kolhapur",'416010'])
    PrintFullName.apply(name1,["Mumbai",'41102'])

    let printName = PrintFullName.bind(name,"kolhapur","416010")
    printName()
    let printName1 = PrintFullName.bind(name1,"Mumbai","41102")
    printName1()

}

export default CallApplyBind;