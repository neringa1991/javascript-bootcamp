"use strict";
// Task & Homework until Thursday:

// Create a JavaScript class called CartItem that represents an item in a shopping cart. Each item should have properties such as the product name, price, and quantity. Your class should have the following functionalities:

// Add Items: Implement a method that allows adding items to the shopping cart. Each item should contain a product name, price, and quantity.

// Calculate Total Price: Create a method to calculate the total price of all the items in the shopping cart. The total price should be calculated by multiplying the price of each item by its quantity and summing up the results.

// Remove Items: Implement a method that allows removing items from the shopping cart. You should be able to specify the item to remove based on its product name.

// Update Items: Create a method to update the quantity of an item in the shopping cart. This method should take the product name and the new quantity as parameters.

// Clear Items from Cart: Implement a method that clears all items from the shopping cart, effectively resetting it to an empty state.

// Bonus Task: Implement a method named applyCoupon that applies a discount to the total price of the shopping cart based on the provided coupon code. The following coupon codes should be supported: 'SAVE10', 'SAVE20', and 'SAVE50'. Each coupon should provide a respective discount ratio of 10%, 20%, and 50%.

// Your task is to create the CartItem class and ensure that all the functionalities mentioned above are correctly implemented.

class ShoppingCart {
  constructor() {
    this.cart = [];
  }

  addItem(cartItem) {
    this.cart.push(cartItem);
    console.log(this.cart);
    return this.cart; //output:[ {product: 'apple', price: 2, quantity: 20}, {product: 'carrots', price: 2, quantity: 10}]
  }

  totalPrice() {
    this.totalPriceVal = this.cart.reduce((accumulator, currentvalue) => {
      return accumulator + currentvalue.price * currentvalue.quantity;
    }, 0);

    console.log(this.totalPriceVal);
    return this.totalPriceVal; //output: 60
  }

  removeItems(name) {
    this.cart = this.cart.filter((obj) => {
      return obj.product !== name;
    });
    console.log(this.cart);
    return this.cart; //output: [ {product: 'carrots', price: 2, quantity: 10}]
  }

  updateItems(name, quantity) {
    this.cart = this.cart.map((obj) => {
      if (obj.product === name) {
        obj.quantity = quantity;
      }
      return obj;
    });
    console.log(this.cart);
    return this.cart; //output: [ {product: 'carrots', price: 2, quantity: 15}]
  }

  clearItems(couponCode) {
    this.cart = [];
    console.log(this.cart);
    return this.cart; //output:[]
  }

  applyCoupon(coupon) {
    const number = coupon.replace(/\D/g, ""); //extracts a number from a string
    if (number !== "") {
      const num = Number(number) / 100;
      this.totalPriceVal = this.totalPriceVal - this.totalPriceVal * num;
    }
    console.log(this.totalPriceVal);
    return this.totalPriceVal; //output 54
  }
}

class CartItem {
  constructor(product, price = 0, quantity = 0) {
    this.product = product;
    this.price = price;
    this.quantity = quantity;
  }
}

const apple = new CartItem("apples", 2, 20);
const carrots = new CartItem("carrots", 2, 10);

const mycart = new ShoppingCart();
mycart.addItem(apple);
mycart.addItem(carrots);
mycart.totalPrice();
mycart.removeItems("apples");
mycart.updateItems("carrots", 15);
mycart.applyCoupon("SAVE10");
