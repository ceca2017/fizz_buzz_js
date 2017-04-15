describe("fizz_buzz_ui", function() {
  beforeEach(function() {
    // We can load fixtures using this method:
    //jasmine.getFixtures().clearCache();
    //var f = jasmine.getFixtures();
    //f.fixturesPath = 'base/spec/fixtures';
    //f.load('sample_partial.html');
    //$.holdReady(false);

    // Or this:
    jasmine.getFixtures().fixturesPath = 'base/spec/fixtures';
    loadFixtures('index.html');
    $.holdReady(false);
  });

  describe("displays text:", function() {

    it("when 1 is passed", function() {
      $('#input_num').val(1);
      $('#fb_button').trigger('click');
        expect($('#return_message').text()).toEqual("1");
    });
  });
});
