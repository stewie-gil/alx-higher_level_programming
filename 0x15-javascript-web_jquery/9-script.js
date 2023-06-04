$(document).ready(function () {
  $.get('https://fourtonfish.com/hellosalut/?lang=fr', function (data) {
    const translation = data.hello;
    $('#hello').text(translation);
  });
});
