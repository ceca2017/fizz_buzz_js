describe("fizz_buzz_ui", function() {
  beforeEach(function() {
    // We can load fixtures using this method:
    //jasmine.getFixtures().clearCache();
    //var f = jasmine.getFixtures();
    //f.fixturesPath = 'base/spec/fixtures';
    //f.load('index.html');
    //$.holdReady(false);

    // Or this:
    jasmine.getFixtures().fixturesPath = 'base/spec/fixtures';
    loadFixtures('index.html');
    $.holdReady(false);

  });

  afterEach(function() {
    // If you need to reset some values after each testing
    // you can do it here.
    //$('#input_num').val('');
    //$('#return_message').val('');
  });



  describe("displays correct result:", function() {
    it("when 15 is passed", function() {
      $('#input_num').val('15');
      $('#fb_button').trigger('click');
      expect($('#return_message').text()).toBe('Result is: fizz buzz. Hmmm...');
    });

    it("when 3 is passed", function() {
      $('#input_num').val('3');
      $('#fb_button').trigger('click');
      expect($('#return_message').text()).toBe('Result is: fizz. Hmmm...');
    });

    it("when 1 is passed", function() {
      $('#input_num').val("1");
      $('#fb_button').trigger('click');
      expect($('#return_message').text()).toEqual('Result is: 1. Hmmm...');
    });

    it("when 5 is passed", function() {
      $('#input_num').val("5");
      $('#fb_button').trigger('click');
      expect($('#return_message').text()).toEqual('Result is: buzz. Hmmm...');
    });

    it("when 0 is passed", function() {
      $('#input_num').val("0");
      $('#fb_button').trigger('click');
      expect($('#return_message').text()).toEqual('Result is: fizz buzz. Hmmm...');
    });
  });

  describe("display error message:", function() {
    it("when 'Hello' is passed", function() {
      $('#input_num').val("Hello");
      $('#fb_button').trigger('click');
      expect($('#return_message').text()).toEqual('Please enter a number to play. Try again...');
    });
  });

});
