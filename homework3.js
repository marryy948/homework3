//1. Given an array. Determine whether it consists only from uniques or not.

// function isUnique(arr) {
//   for(var i = 0; i < arr.length; i++) {
//     if (arr.indexOf(arr[i]) != i) return false;
//   }
//   return true;
// }

// isUnique([1,2,3,4,2])


// 2. Given an array of integers. All numbers are unique. Find the count of missing numbers
// between minimum and maximum elements to make integers sequence.

// function minOfArr(arr){
//     let min = +Infinity
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] < min){
//             min = arr[i]
//         }
//     }
//     return min
// }

// function maxOfArr(arr){
//     let max = -Infinity
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i]
//         }
//     }
//     return max
// }

// function missingNums(arr){
//     let minimum = minOfArr(arr)
//     let maximum = maxOfArr(arr)
//     let res = 0;
//     for(let i = minimum + 1; i <= maximum - minimum; i++){
//         if(i in arr){
//             continue
//         }else{
//             res += 1
//         }
//     }
//     return res
// }
// missingNums([3, 2, 1, 5])


//3. Write a constructor function called CoffeeShop, which has three instance properties:
// 1. name : a string (basically, of the shop)
// 2. menu : an array of items (of object type), with each item containing the item (name
// of the item), type (whether food or a drink) and price.
// 3. orders : an empty array
// and seven methods:
// 1. addOrder: adds the name of the item to the end of the orders array if it exists on the
// menu. Otherwise, return &quot;This item is currently unavailable!&quot;
// 2. fulfillOrder: if the orders array is not empty, return &quot;The {item} is ready!&quot;. If the
// orders array is empty, return &quot;All orders have been fulfilled!&quot;
// 3. listOrders: returns the list of orders taken, otherwise, an empty array.
// 4. dueAmount: returns the total amount due for the orders taken.
// 5. cheapestItem: returns the name of the cheapest item on the menu.
// 6. drinksOnly: returns only the item names of type drink from the menu.
// 7. foodOnly: returns only the item names of type food from the menu.
// IMPORTANT: Orders are fulfilled in a FIFO (first-in, first-out) order.

function CoffeeShop(name, menu) {
    this.name = name
    this.menu = menu
    this.order = []

    this.addOrder = function(itemName) {
      const menuItem = this.menu.find(item => item.name === itemName)
      if (menuItem) {
        this.orders.push(itemName)
      } else {
        return "This item is currently unavailable!"
      }
    }
  
    this.fulfillOrder = function() {
      if (this.orders.length > 0) {
        const item = this.orders.shift()
        return `The ${item} is ready!`
      } else {
        return "All orders have been fulfilled!"
      }
    }
  
    this.listOrders = function() {
      return this.orders
    }
  
    this.dueAmount = function() {
      let totalAmount = 0
      for (const order of this.orders) {
        const menuItem = this.menu.find(item => item.name === order)
        totalAmount += menuItem.price
      }
      return totalAmount
    }
  
    this.cheapestItem = function() {
      let cheapest = this.menu[0]
      for (const item of this.menu) {
        if (item.price < cheapest.price) {
          cheapest = item
        }
      }
      return cheapest.name
    }
  
    this.drinksOnly = function() {
      const drinks = this.menu.filter(item => item.type === "drink")
      return drinks.map(item => item.name)
    }
  
    this.foodOnly = function() {
      const foodItems = this.menu.filter(item => item.type === "food")
      return foodItems.map(item => item.name)
    }
  }

  const menu = [
    { name: "Coffee", type: "drink", price: 3 },
    { name: "Sandwich", type: "food", price: 5 },
    { name: "Tea", type: "drink", price: 2 },
    { name: "Cake", type: "food", price: 4 }
  ];
  
  const coffeeShop = new CoffeeShop( "Awesome Coffee Shop", menu);
  
  coffeeShop.addOrder("Coffee");
  coffeeShop.addOrder("Sandwich");
  console.log(coffeeShop.fulfillOrder()); 
  console.log(coffeeShop.fulfillOrder()); 
  console.log(coffeeShop.fulfillOrder()); 
  console.log(coffeeShop.listOrders()); 
  console.log(coffeeShop.dueAmount());
  console.log(coffeeShop.cheapestItem());
  console.log(coffeeShop.drinksOnly()); 
  console.log(coffeeShop.foodOnly()); 