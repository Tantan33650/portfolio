$(document).ready(function(){

  // Check if navbar is at top
    function checkIfTop() {
        if($(window).scrollTop() > 70) {
            $('.navbar').addClass('onscroll');
          console.log('Class Added');
        } else {
            $('.navbar').removeClass('onscroll');
          console.log('Class Removed');
        }
    }

  $(window).scroll(function() {
       checkIfTop();
    });
});
