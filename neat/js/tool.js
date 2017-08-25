$(function(){
  $('.henkou_btn').on('click', function() {
    $(this).next().next().toggleClass("ondisp");
  });

  $('.round_btn').on('click', function() {
    $(this).next().toggleClass("ondisp")
  });

  $( ".henkou" ).draggable();
});