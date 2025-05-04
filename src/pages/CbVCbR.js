const CbVCbR = () => {

    function callbyValue(a) {
        a = a + 10
        console.log("Inside function:", a);
    }
    let num = 20;
    callbyValue(num);
    console.log("Outside function:", num); // Outside function: 5




    function callbyReference(obj) {
        obj.name = 'Divyani'

    }
    let Name = { name: "Devu" }
    callbyReference(Name)
    console.log(Name.name)


    // Call by Reference with Arrays
    function reference(arr) {
        arr.push(10);
    }

    const array = [1, 2, 3];
    reference(array)
    console.log("array", array)

    //Nested Objects (Call by Reference)
    function nestedReference(Person) {
        Person.adress.city = 'Balinge'

    }
    let Person = {
        name: 'Divyani',
        adress: {
            city: 'Kolhapur',
            pincode: 416010
        }
    }
    nestedReference(Person);
    console.log(Person)
}


export default CbVCbR;