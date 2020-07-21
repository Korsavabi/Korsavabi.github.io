//Burger
function choose(el) {
    $(el).addClass("selected");
}
$(".burger").click(function() {
  $('.tablet-phone').toggle();
});
$(document).on('click', function(e) {
  if (!$(e.target).closest(".burger").length) {
    $('.tablet-phone').hide();
  }
  e.stopPropagation();
  
});