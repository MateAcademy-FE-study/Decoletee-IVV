var $select = $('#interest')
$select.on('selectric-open', function () {
    var arrow = document.getElementsByClassName("select__arrow")[0];
    arrow.style.transform = "rotate(0deg)"
}).selectric();
$select.on('selectric-close', function () {
    var arrow = document.getElementsByClassName("select__arrow")[0];
    arrow.style.transform = "rotate(180deg)"
}).selectric();
$select.selectric({
    disableOnMobile: false,
    nativeOnMobile: false
});

$('#language').selectric({
        disableOnMobile: false,
        nativeOnMobile: false
});
$('.form-group .selectric-items').addClass('animated slideInRight');
$('.play').addClass('animated rotateInUpRight')



  $('button.form__button').click(function(e){
    swal({
      title: "You successfully contacted us!", 
      text: "Thank you for your feedback", 
      icon: "success",
      buttons: true,
      closeModal: false
    });
  })

  $('.form-group .selectric-items li').click(function(e){
    swal({
      title: "You successfully changed language",  
      icon: "success",
      buttons: true,
      closeModal: false
    });
  })

