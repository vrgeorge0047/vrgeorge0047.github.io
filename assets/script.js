/*$(function() {
 $('.slide').css({
   'height': (($(window).height()) -40)
  });
});*/

/*$(function(){
  setHeight(); 
});

$(window).resize(function() {
  setHeight(); 
});

function setHeight() {
  var Height = $(window).height();
  $('.slide').css('height', Height);
  
}
*/

  
function goToByScroll(id){			$('html,body').animate({
  scrollTop: $("."+id).offset().top +0
  },400);
}