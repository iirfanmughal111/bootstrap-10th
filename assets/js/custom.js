const btnTheme = document.getElementById('themeBtn');
btnTheme.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme');
    document.getElementById('sunIcon').classList.toggle('d-none');
    document.getElementById('moonIcon').classList.toggle('d-none');
    $('#bg-navbar').toggleClass('navbar-light');
    $('#bg-navbar').toggleClass('navbar-dark');
});


// goToToButton
var btnTop = $('#goToTopBtn');

$(window).scroll(function() {
  if ($(window).scrollTop() > 350) {
    btnTop.addClass('show');
  } else {
    btnTop.removeClass('show');

  }
});

btnTop.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


// var nav = document.querySelector('#bg-navbar');

// window.addEventListener('scroll', function () {
//   if (window.pageYOffset > 100) {
//     nav.classList.add('bg-dark', 'shadow');
//   } else {
//     nav.classList.remove('bg-dark', 'shadow');
//   }
// });