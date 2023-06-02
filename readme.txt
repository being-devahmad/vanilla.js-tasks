Assignment # 2 (Vanilajs)

We need to calculate how many Km or Miles the user traveled.
Part # 1:
const trips = [
   {to:'Brazil',distance:1000},
   {to:'Chine',distance: 2500},
   {to:'India',distance: 3000}
]

Part # 2:
We have an object with computers. And what we want to know, HOW many computer we have with MAC and how many with WINDOWS.

const computers = [
   {type:'Laptop',price:124, os:'Windows'},
   {type:'Desk',price:124, os:'Mac'},
   {type:'Desk',price:124, os:'Windows'},
   {type:'Laptop',price:124, os:'Mac'},
   {type:'Laptop',price:124, os:'Windows'},
];
PS: Hint as; uh can solve both queries with reduce function but render the ui and make a function and trigger it on a button when you want to calculate it.

Part # 3:

Which of these variables would you change to let or const ?

var name = "James";
var employeeId = 25;
var eyes = "Blue";
var age = 25
var position = "Developer";
var salary = 2500;
var knowdlege = ['Javascript','PHP','REACT','Angular 4'];
var married = false;

PS: Just Refactor the code as per your variables scope understanding or nothing else, dont be use chatgpt or google plz try to itself.

Part # 4:
We have div, and if the user clicks on it, will get a cupcake with an amount to pay and the order number.Refactor the code to meet ES6 standards.

Html:

<div class="cupcake">
 Get a random cupcake with a random price
 </div>
 <div class="orders"></div>
<script>

var cupcake = document.querySelector('.cupcake');
var container = document.querySelector('.orders')
 
var cupcakes = [
 {id:1,flavor:'Strawberry'},
 {id:2,flavor:'Apple'},
 {id:3,flavor:'Banana'}
]
 
var randomCupcake;
var orderNumber = 0;
var baseAmount = 5;
var finalAmount;
var dicountID = 2;
var dicountAmount = 3;
var message
 
cupcake.addEventListener("click",function(){
 // Select a random cupcake
 randomCupcake = Math.floor(Math.random() * cupcakes.length) + 0;
 
 // Increment the order number, we get a different order with each cupcake.
 orderNumber += 1;
 
 // Depending on the "dicountID" variable, this cupcake is on sale or not.
 finalAmount = dicountID == cupcakes[randomCupcake].id ? (baseAmount -dicountAmount ):baseAmount;
 
 // Create the message
 message = '<div>- You won a ' + cupcakes[randomCupcake].flavor + ' for ' + finalAmount + '$ , your order # is '+ orderNumber + '</div>'
 container.insertAdjacentHTML('beforeend',message)
 
});
</script>


Hint as: Just read the comments,