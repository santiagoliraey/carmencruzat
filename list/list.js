$(function() {

  $(".btn").on("click", function(event) {
    event.preventDefault();
   $(this).parent().remove();
  })

})