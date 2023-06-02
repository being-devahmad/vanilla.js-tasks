// We need to calculate how many Km or Miles the user traveled.
const trips = [
  { to: "Brazil", distance: 1000 },
  { to: "Chine", distance: 2500 },
  { to: "India", distance: 3000 },
];
let totalDistance = () => {
  let totalDistanceinKm = 0;
  let totalDistanceinMiles = 0;
  trips.forEach((trip) => {
    totalDistanceinKm += trip.distance;
  });
  const milesPerKm = 0.621371;
  totalDistanceinMiles = totalDistanceinKm * milesPerKm;

  let getDistance = document.getElementById("getDistance");
  getDistance.innerHTML = `<h3>The total trip distance in Km the user travelled = ${totalDistanceinKm} <br> and in Miles = ${totalDistanceinMiles}</h3>`;
};

// We have an object with computers. And what we want to know, HOW many computer we have with MAC and how many with WINDOWS.

const computers = [
  { type: "Laptop", price: 124, os: "Windows" },
  { type: "Desk", price: 124, os: "Mac" },
  { type: "Desk", price: 124, os: "Windows" },
  { type: "Laptop", price: 124, os: "Mac" },
  { type: "Laptop", price: 124, os: "Windows" },
];
// We have an object with computers. And what we want to know, HOW many computer we have with MAC and how many with WINDOWSs
let totalComputers = () => {
  let computersWithMac = 0;
  let computersWithWindows = 0;
  computers.forEach((computer) => {
    if (computer.os === "Mac") {
      computersWithMac++;
    }
    if (computer.os === "Windows") {
      computersWithWindows++;
    }
  });
  let getComputers = document.getElementById("getComputers");
  getComputers.innerHTML = `<h3>The number of computers with Mac = ${computersWithMac} <br> The number of computers with Mac = ${computersWithWindows} </h3>`;
};

// Which of these variables would you change to let or const ?

// var name = "James";
// var employeeId = 25;
// var eyes = "Blue";
// var age = 25;
// var position = "Developer";
// var salary = 2500;
// var knowdlege = ["Javascript", "PHP", "REACT", "Angular 4"];
// var married = false;

const name = "james";
let employeeId = 25;
const eyes = "Blue";
let age = 25;
const position = "Developer";
const salary = 2500;
const knowdlege = ["Javascript", "PHP", "REACT", "Angular 4"];
let married = false;

// We have div, and if the user clicks on it, will get a cupcake with an amount to pay and the order number.Refactor the code to meet ES6 standards.

// Html:

// <div class="cupcake">
//  Get a random cupcake with a random price
//  </div>
//  <div class="orders"></div>
// <script>

// var cupcake = document.querySelector('.cupcake');
// var container = document.querySelector('.orders')

// var cupcakes = [
//  {id:1,flavor:'Strawberry'},
//  {id:2,flavor:'Apple'},
//  {id:3,flavor:'Banana'}
// ]

// var randomCupcake;
// var orderNumber = 0;
// var baseAmount = 5;
// var finalAmount;
// var dicountID = 2;
// var dicountAmount = 3;
// var message

// cupcake.addEventListener("click",function(){
//  // Select a random cupcake
//  randomCupcake = Math.floor(Math.random() * cupcakes.length) + 0;

//  // Increment the order number, we get a different order with each cupcake.
//  orderNumber += 1;

//  // Depending on the "dicountID" variable, this cupcake is on sale or not.
//  finalAmount = dicountID == cupcakes[randomCupcake].id ? (baseAmount -dicountAmount ):baseAmount;

//  // Create the message
//  message = '<div>- You won a ' + cupcakes[randomCupcake].flavor + ' for ' + finalAmount + '$ , your order # is '+ orderNumber + '</div>'
//  container.insertAdjacentHTML('beforeend',message)

// });
// </script>

// Hint as: Just read the comments,

var cupcake = document.querySelector(".cupcake");
var container = document.querySelector(".orders");

var cupcakes = [
  { id: 1, flavor: "Strawberry" },
  { id: 2, flavor: "Apple" },
  { id: 3, flavor: "Banana" },
];
let randomCupcake;
let orderNumber = 0;
const baseAmount = 5;
let finalAmount;
const dicountID = 2;
const dicountAmount = 3;
let message;
cupcake.addEventListener("click", function () {
  // Select a random cupcake
  randomCupcake = Math.floor(Math.random() * cupcakes.length) + 0;
  // Increment the order number, we get a different order with each cupcake.
  orderNumber += 1;
  // Depending on the "dicountID" variable, this cupcake is on sale or not.
  finalAmount =
    dicountID == cupcakes[randomCupcake].id
      ? baseAmount - dicountAmount
      : baseAmount;
  // Create the message
  container.innerHTML = `<h3>You won a ${cupcakes[randomCupcake].flavor} for ${finalAmount}$ and your order # is ${orderNumber}</h3>`;
});
