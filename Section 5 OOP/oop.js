const str = new String('hello word');
// console.log(str);

function Product(brand, price, discount) {
  this.brand = brand;
  this.price = price;
  this.discount = discount;
}

Product.prototype.getPriceWithDiscount = function () {
  return (this.price * (100 - this.discount)) / 100;
};

Product.prototype.setPrice = function (newPrice) {
  this.price = newPrice;
}

const apple = new Product('Apple', 100, 15);
const samsung = new Product('Samsung', 200, 25);

// console.log(apple);
// console.log(samsung);

// console.log(apple.getPriceWithDiscount());

// console.log(apple instanceof Product);

// const apple1 = apple.setPrice(500);

// console.log(apple);

// console.log(apple1);

// console.log(apple.getPriceWithDiscount());




// Object.create
const protoForObj = {
  sayHello() {
    return 'Hello word';
  },
};

const obj = Object.create(protoForObj, {
  firstName: {
    value: 'Vitalii',
  },
});

console.log(obj);


function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

User.prototype.sayHallo = function () {
  return `Hello ${this.firstName} ${this.lastName}`;
};

const user = new User('Vitalii', 'Turzhanskyi');

console.log(user);
console.log(user.sayHallo());

// Customer
function Customer(firstName, lastName, membership) {
  User.apply(this, arguments);

  this.membership = membership;
};

Customer.prototype = Object.create(User.prototype);
Customer.prototype.cunstructor = Customer;

Customer.prototype.getMembership = function () {
  return this.membership.toUpperCase();
};

const customer = new Customer('Ivan', 'Ivanov', 'basic');

console.log(customer);
console.log(customer.sayHallo());
console.log(customer.getMembership());