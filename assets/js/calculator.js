function Calculator() {}

Calculator.prototype.fizzBuzz = function(number) {
  if (typeof(number) == "number") {
    switch (true){
    case (number%15 === 0):
      return "fizz_buzz";
    case number%5 === 0:
      return "buzz";
    case number%3 === 0:
      return "fizz";
    default:
      return number;
  	}
  } else {
    return "not a number";
  }
};
