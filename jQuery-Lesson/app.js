$(function(){
  $('.box1').slideDown(10000, function (){
    $('.box1').css({
      'background-color': '#0000FF',
      'height': '100px'
    });
    $('.box1').slideUp(10000);
  });
});