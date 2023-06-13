// helps to create objects and provmoneyes some activieties

// class Student {
//   // when we call the class, costructor code will be run
//   constructor(name, points) {
//     this.name = name;
//     this.points = points;
//   }

//   // the method of the class
//   sayInformation() {
//     console.log(`Student: ${this.name}`);
//   }
// }

// const student1 = new Student("Neringa", 55);
// const student2 = new Student("Mustafa", 55);

// student1.sayInformation();

const myArr = [
  {money: 222, name: "Viola", accNumber: 7216478596},
  {money: 333, name: "Kristina", accNumber: 7216478596},
  {money: 125, name: "Simona", accNumber: 7216478596},
  {money: 555, name: "Ieva", accNumber: 7216478596},
  {money: 123, name: "Simona", accNumber: 7216478596},
  {money: 55, name: "Zymante", accNumber: 7216478596},
];

// CTRL+D selects all the items with the same name

// to create a lot of classes for each item
const answer = myArr.map((item) => {
  return class {
    constructor() {
      this.accountHolder = item.name;
      this.accountNumber = item.accNumber;
      this.balance = item.money;
    }
    deposit(amount) {
      this.balance += amount;
      console.log(this.balance);
    }
    withdraw(amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
      } else {
        console.log(`You do not have enough balance:${this.balance} `);
      }
    }
    checkBalance() {
      console.log(`Account ${this.accountHolder} has ${this.balance}`);
    }
  };
});

console.log(answer, new answer[0]());
// const account = new BankAccount("Neringa", 1234452424, 500);
// account.deposit(500);
// account.withdraw(300);
// account.checkBalance();

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // we always need to return
  getArea() {
    return this.height * this.width;
  }
  getPerimeter() {
    return (this.height + this.height) * 2;
  }
}

const rectangle1 = new Rectangle(10, 50);
console.log(rectangle1.getArea(), rectangle1.getPerimeter());

// to replicate the same with functions we have to create two separate functions which doesn't have anything in common. Classes incapsulates the logic and all the related  methods are accessible using classes only

const getArea = (height, width) => {
  return this.height * this.width;
};
