function Calculator() {}

Calculator.prototype.fizzBuzz = function(inp_number) {
  var number = parseFloat(inp_number);
  if (isNaN(number)) {
    return "not a number";
  } else {
    switch (true){
    case (number%15 == 0):
      return "fizz buzz";
    case number%5 == 0:
      return "buzz";
    case number%3 == 0:
      return "fizz";
    default:
      return number;
  	}
  }
};
