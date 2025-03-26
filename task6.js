/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
let age=100;
let price=800;
if(age <10){
    console.log("Tumi choto dutvat .Tomar ticket Free");
}else if(age<=25){
    const discount=price*50/100;
    console.log("Tumi Student Tai tumi 50% discount paicho  ",discount+" taka" );
}else if(age >=60){
    const discount=price*15/100;
    console.log("Tumi 60 bosorer boro tai tumi 15% discount paicho ",discount+" taka" );
}else{
    console.log("ticket fare 800 tk")
}