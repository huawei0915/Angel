
document.getElementById('menubtn').addEventListener('click', function (e) {
  $(this).toggleClass('active');
  $('#menuUl').toggleClass('active');
})

$('#menuUl li').click(function () {
  $(this).parent().find('li').each(function () {
      if ($(this).hasClass('current-active')) {
          $(this).toggleClass('current-active');
      }
  })
  $(this).toggleClass('current-active');
})
