var num = 23;

var num_two = 2;
var sum = num+num_two

var num_three = 40;

var num_four = 4;

var sum_two = num_three+num_four
console.log("Sum_two:",sum)

//Functions
//void function
function summation(){
    var num_three = 40;

    var num_four = 4;

    var sum_two = num_three+num_four

}
summation();

//return function
function summation(){
    var num_three = 40;

    var num_four = 4;

    var sum_two = num_three+num_four;

    return sum_two
}

//use it by printing the value directly on the terminal
console.log("sum four:",summation())
//assinging the value to a varieble
var sum_four = summation


var sum_five = summation();

// functions with parameters
function summation_three(num_four,num_three){

    var sum_six = num_four+num_three;
    console.log("Sum Six:",sum_six);


} 
summation_three(40,15);
///WRITE A FUNCTION CALLED COMPUTAION AND SHOULD BE ABLE TO ADD SUBTRACT,DIVIDE,MULTIPLY ANY TWO NUMBER GIVEN(USE RETURNING FUNCTION THAT USES PAREMETERS)

///class 
function Mother_tang(name){
    return name
}
var name = "TUMUSIIME MARVIN"
console.log("olile o otya",name)


////class 2
function calculate_profit(selling_price,cost_price,units_sold,unit_price){
    
    var profit=(selling_price-cost_price);
    return profit
}
calculate_profit(50000,16000,20,500);
console.log("The profit is ",profit);


//NUMBER 3
function computation(a, b) {
    let addition = a + b;
    let subtraction = a - b;
    let multiplication = a * b;
    let division = b !== 0 ? a / b : "Undefined (division by zero)";
    
    return {
        addition: addition,
        subtraction: subtraction,
        multiplication: multiplication,
        division: division
    };
}

