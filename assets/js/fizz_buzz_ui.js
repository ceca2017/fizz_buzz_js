var onReadyEventsIndex = function() {
  $('#fb_button').click(function() {
    //var input_num = parseFloat($('#input_num').val());
    //console.log(input_num);
    var calcRes = new Calculator();
    var fb_result = calcRes.fizzBuzz($('#input_num').val());
    //fb_result = 'fizz';
    if (fb_result == "not a number") {
      $('#return_message').html('Please enter a number to play. Try again...');
    } else {
      $('#return_message').html('Result is: ' + fb_result + '. Hmmm...');
    }
  });
}
