// ques-01
for(let i=2;i<=100;i=i+2){
    console.log(i)
}
// ques-02
let target=9;
let num=prompt("Guess a number:");
if(num==target){
    console.log("Congratulations!you guessed right number.")
}
else{
    console.log("Opps!you gussed wrong number.")
}
// ques-03
let str=prompt("Enter ur name:");
let username=`@${str}`;
console.log(username)