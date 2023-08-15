// Demo 1:
let objArr = [
    {
        item: 'Milk',
        price: 5.99
    },
    {
        item: 'Eggs',
        price: 8.99
    },
    {
        item: 'Cheese',
        price: 6.99
    },
    {
        item: 'ham',
        price: 6.99
    },
    {
        item: 'bagel',
        price: 7.99
    }
]

objArr.forEach((foodObj, index, array) => {
    // console.log(foodObj, `The index position of this object is ${index}`)
    let {item, price} = foodObj
    console.log(`The item at index ${index} is ${item} with a price of $${price}`)
})

let modernGroceries = objArr.map((foodObj, index, array) => {
    let inflation = .25
    let {price} = foodObj
    let newPrice = price + (price * inflation)
    return {...foodObj, price: newPrice}
})
console.log(objArr)
console.log(modernGroceries)

let expensiveGroceries = modernGroceries.filter((foodObj) => foodObj.price > 9)
console.log(expensiveGroceries)

let expensivePrice = expensiveGroceries.reduce((acc, curr) => {
    console.log(`Our accumulator value is ${acc} \n Our current loop value is ${JSON.stringify(curr)}`)
    let {price} = curr
    return acc + price
}, 0)

console.log(`The most expensive items in our groceries cost a total of $${expensivePrice}`)

let wallet = modernGroceries.reduce((acc,foodObj) => {
    let {price} = foodObj
    return acc - price
}, 100)
console.log(`After our grocery trip, we have $${wallet} left in our wallet`)