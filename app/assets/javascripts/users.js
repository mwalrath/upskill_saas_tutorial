/* global $, Stripe */
//Document ready
$(document).on('turbolinks:load', function(){
  var theForm = $('#pro_form');
  var submitBtn = $('#form-submit-btn');
  //Set Stripe Public key
  Stripe.setPublishableKey( $('meta[name="stripe-key"]').attr('content') );
  //When user clicks submit
  submitBtn.click(function(event){
    //prevent default submission behaviuor
    event.preventDefault();
    //Collect credit card fields
    var ccNum = $('#card_number').val(),
        cvcNum = $('#card_code').val(),
        expMonth = $('#card_month').val(),
        expYear = $('#card_year').val();
    // Send card info to stripe
    Stripe.createToken({
      number: ccNum,
      cvc: cvcNum,
      exp_month: expMonth,
      exp_year: expYear
    }, stripeResponseHandler);
  });
  
  

  
  //stripe will return a token
  //Inject card token as hidden field in form
  //submit form to rails 
}); 