

const PromiseChanining = () => {
    const cart = ['T-Shirt', 'Shoes', 'Kurti'];

    const createOrder = function (cart) {
        const promise = new Promise(function (resolve, reject) {
            if (!isValidateCart()) {
                const err = new Error("Cart is empty")
                reject(err)
            }
            const orderID = '1234'
            if (orderID) {
                setTimeout(() => {
                    resolve(orderID)
                }, 1000)
            }
        })
        return promise

    }
    const proceedToPayment = function (orderID) {
        const promise = new Promise(function (resolve, reject) {
            if (orderID) {
                resolve({
                    orderID: orderID,
                    status: "Successful"
                })
            } else {
                const err = new Error("Payment Failed!")
                reject(err)
            }

        })
        return promise
    }
    const orderSummary = function (details) {
        const promise = new Promise(function (resolve, reject) {
            if (details.orderID) {
                resolve({
                    orderID: details.orderID,
                    details: "Arriving today by 10 PM",
                    item: "Kurti",
                    status: "Order Place Successful"
                })
            } else {
                const err = new Error("Unable to fetch Order summary!")
                reject(err)
            }

        })
        return promise
    }
    const updateWallate = function () {
        const promise = new Promise(function (resolve, reject) {
            resolve("Hey!!!!!! Manoj your Wallate is updated successfully!")
        })
        return promise
    }
    const isValidateCart = () => {
        return false
    }
    createOrder(cart).then(function (orderID) {
        console.log("orderID", orderID)
        return proceedToPayment(orderID)
    })
        .then(function (data) {
            console.log("status", data.status)
            return orderSummary(data)
        })
        .then(function (orderSummary) {
            console.log('orderSummary', orderSummary)
            return updateWallate()
        })
        .then(function (data) {
            console.log(data)
        })
        .catch(function (error) {
            console.error(error.message)
        })




}

export default PromiseChanining;


