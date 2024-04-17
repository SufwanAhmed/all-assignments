//hello world ka assignment
console.log("Sufwan Ahmed");
// string ka istemaal
var name1 = ("Sufwan");
console.log(name1);
var name2 = ("8");
console.log(name2);
// number ka istemaal
var name3 = 8;
console.log(name3);
// camelCase ka istemaal
var station = "karachiStation";
console.log(station);
// snake_case ka istemaal
var game = "spider_man";
console.log(game);
// PascalCase ka istemaal
var sports = "BasketBall";
console.log(sports);
// addition ka istemaal
var apples = 4;
var mangoes = 4;
var sum = (apples + mangoes);
console.log(sum);
//subtraction ka istemaal
var pencils = 4;
var markers = 4;
var subtraction = (pencils - markers);
console.log(subtraction);
// multiplication ka istemaal
var guavas = 4;
var bananas = 4;
var multiplication = (guavas * bananas);
console.log(multiplication);
// division ka istemaal
var oranges = 4;
var bags = 2;
var division = (oranges / bags);
console.log(division);
// modulus ka istemaal
var biscuits = 5;
var baskets = 2;
var modulus = (biscuits % baskets);
console.log(modulus);
// unary operator ka istemaal
var index = 20;
var add = (++index + 2 + --index);
console.log(add);
// combining operator ka istemaal
var a = 3;
var b = 4;
a += 1;
b *= 4;
console.log(a + b);
// comparision operator ka istemaal
// equality ka istemaal
var x = 5;
var y = 10;
var output = (x == y);
console.log(output);
// inequality ka istemaal
var bear = 3;
var deer = 8;
var prt = (bear != deer);
console.log(prt);
// logical operators
// AND ka istemaal
var laptops = 5;
var computers = 10;
if (laptops > 3 && computers > 3) {
    console.log("Both laptops and computers are greater than 3");
}
else {
    console.log("Both laptops and computers are not greater than 3");
}
// OR ka istemaal
var copies = 5;
var books = 2;
if (copies > 1 || books > 1) {
    console.log("At least one of copies or books are greater than 1");
}
else {
    console.log("Neither copies nor books are greater than 1");
}
// NOT ka istemaal
var bats = 5;
if (!(bats > 10)) {
    console.log("bats are not greater than 10");
}
else {
    console.log("bats are greater than 10");
}
// logic statements
// if ka istemaal
var weather = "true";
if (weather) {
    console.log("you wear sunglasses");
}
// if else ka istemaal
var papers = "true";
if (papers) {
    console.log("do preparation");
}
else {
    console.log("playing games");
}
// function
// returning function ka istemaal
function halfFryEgg() {
    var cooked = 1 + 1.5 + 2;
    return cooked;
}
var response = halfFryEgg();
console.log(response);
// arrow function ka istemaal
var egg = function () { return 2 + 3 + 8; };
var result = egg();
console.log(result);
// dot ka istemaal
var person = { name: "sufwan", age: 16, qualification: "matric", hobby: "coding" };
console.log(person.hobby);
// arrays
// adding items
var colors = ["red", "green", "orange", "brown"];
colors.push("blue", "pink");
console.log(colors);
