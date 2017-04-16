describe("SampleObject", function() {
  var subject;

  beforeEach(function() {
    subject = new SampleObject();
  });

  it("#myFirstFunction set a Yay! as attribute", function() {
    subject.myFirstFunction();
    expect(subject.someAttribyte).toEqual('Yay!');
  });

  it("#mySecondFunction adds two numbers together", function() {

    expect(subject.mySecondFunction(10, 5)).toEqual(15);
  });

  it("myThirdFunction returns true", function(){
    expect(subject.myThirdFunction()).toEqual(true);
  })
});
