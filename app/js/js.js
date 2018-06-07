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
$('.play').addClass('animated bounceInDown')





var menuButton = document.querySelector('.menu__icon')
  menuButton.addEventListener("click", function(){
  var b = document.querySelector('body')
  if( b.style.overflow === "hidden"){
    b.style.overflow = "visible";

  } else{b.style.overflow = "hidden"}
})





var out = {}
var arr = document.querySelector('.form__button')
arr.addEventListener('click', function(e){
  e.preventDefault();
  var data = $( 'form' ).serializeArray();
  for(var i = 0; i < data.length; i++){
    var record = data[i];
    out[record.name] = record.value;
  }
    swal({
      title: "You successfully contacted us!", 
      icon: "success",
      elem: out,
      buttons: true,
      closeModal: false
    });
});
console.log(out)





$('.form-group .selectric-items li').click(function(e){
  swal({
    title: "You successfully changed language",  
    icon: "success",
    buttons: true,
    closeModal: false
  });
})