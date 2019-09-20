let unclicked = true;
$(document).ready(function(){

    console.log('REF: ' + document.referrer);
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
  // we only want the menu to open and close if this is the first page visit, 
  // not when the user clicks to other pages on this site
  if ((!document.referrer) || (!document.referrer.match((/bschwarz.githug,io|localhost/)))) {
    clickMenu();
    setTimeout(clickMenu, 1000);
    unclicked = false;
  }

});