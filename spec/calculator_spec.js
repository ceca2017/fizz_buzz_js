describe("Calculator", function() {
  var subject;

  beforeEach(function() {
    subject = new Calculator();
  });

  it("passing 1 should return 1", function() {
    expect(subject.fizzBuzz(1)).toEqual(1);
  });

  it("passing 3 should return fizz", function() {
    expect(subject.fizzBuzz(3)).toEqual("fizz");
  });

  it("passing 5 should return buzz", function() {
    expect(subject.fizzBuzz(5)).toEqual("buzz");
  });

  it("passing 15 should return fizz_buzz", function() {
    expect(subject.fizzBuzz(15)).toEqual("fizz_buzz");
  });

  it("passing 0 should return fizz_buzz", function() {
    expect(subject.fizzBuzz(0)).toEqual("fizz_buzz");
  });

  it("passing 'abc' should return 'not a number'", function() {
    expect(subject.fizzBuzz("abc")).toEqual("not a number");
  });

});
