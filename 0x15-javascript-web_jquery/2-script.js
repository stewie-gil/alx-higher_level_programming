$(document).ready(function () {
  // ensures works only when html has fully loaded
  $('#red_header').click(function () {
    // selects tag with header id
    $('header').css('color', '#FF0000');
  });
});
