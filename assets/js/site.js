$(document).ready(function(){
  
  $('#toggle').on('click', function expand() {
    if(! $('#menu').hasClass('menu-active')){
      $('#menu').css("transform","scale(2)"); 
      $('#menu').addClass('menu-active');
      i=1;
    } else {
      $('#menu').css("transform","scale(0)");
      $('#menu').removeClass('menu-active');
      i=0;
    }
  });

  function clickMenu() {
    $('#toggle').trigger('click')
  }
console.log('READY');
  // $('#menu').trigger('hover');
  // $('#toggle').trigger('click');
  clickMenu();
  setTimeout(clickMenu, 2000);
});