//hello world ka assignment
console.log("Sufwan Ahmed");
// string ka istemaal
let name1: string=("Sufwan");
console.log(name1);
let name2: string=("8");
console.log(name2);
// number ka istemaal
let name3: number=8;
console.log(name3);
// camelCase ka istemaal
let station:string="karachiStation";
console.log(station);
// snake_case ka istemaal
let game:string="spider_man";
console.log(game);
// PascalCase ka istemaal
let sports:string="BasketBall";
console.log(sports);
// addition ka istemaal
let apples=4;
let mangoes=4;
let sum=(apples+mangoes);
console.log(sum);
//subtraction ka istemaal
let pencils=4;
let markers=4;
let subtraction=(pencils-markers);
console.log(subtraction);
// multiplication ka istemaal
let guavas=4;
let bananas=4;
let multiplication=(guavas*bananas);
console.log(multiplication);
// division ka istemaal
let oranges=4;
let bags=2;
let division=(oranges/bags);
console.log(division);
// modulus ka istemaal
let biscuits=5;
let baskets=2;
let modulus=(biscuits%baskets);
console.log(modulus);
// unary operator ka istemaal
let index=20;
let add=(++index + 2 + --index)
console.log(add);
// combining operator ka istemaal
let a=3;
let b=4;
a+=1;
b*=4;
console.log(a+b);
// comparision operator ka istemaal
// equality ka istemaal
let x = 5;
let y = 10;
let output=(x == y);
console.log(output);
// inequality ka istemaal
let bear = 3;
let deer = 8;
let prt=(bear != deer);
console.log(prt);
// logical operators
// AND ka istemaal
let laptops = 5;
let computers = 10;
if (laptops > 3 && computers > 3) {
    console.log("Both laptops and computers are greater than 3");
} else {
    console.log("Both laptops and computers are not greater than 3");}
// OR ka istemaal
let copies = 5
let books = 2
if (copies > 1 || books > 1) {
    console.log("At least one of copies or books are greater than 1");
}else{
    console.log("Neither copies nor books are greater than 1")}
// NOT ka istemaal
let bats = 5;
if (!(bats > 10)) {
    console.log("bats are not greater than 10");
} else {
    console.log("bats are greater than 10");
}
// logic statements
// if ka istemaal
let weather="true";
if(weather)
    {console.log("you wear sunglasses");}
// if else ka istemaal
let papers="true";
if(papers)
    {console.log("do preparation");}
else{
    console.log("playing games")
}
// function
// returning function ka istemaal
function halfFryEgg(){
    let cooked = 1 + 1.5 + 2;
    return cooked
}
let response:number=halfFryEgg()
console.log(response);
// arrow function ka istemaal
let egg=()=>2+3+8;
let result:number=egg()
console.log(result);
// dot ka istemaal
let person={name:"sufwan",age:16,qualification:"matric",hobby:"coding"}
console.log(person.hobby)
// arrays
// adding items
let colors:string[]=["red","green","orange","brown"]
colors.push("blue","pink")
console.log(colors);

