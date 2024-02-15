const aside = document.querySelector('aside');
const btnMenu = document.getElementById('btn-menu');

btnMenu.addEventListener('click', function (e) {
  aside.classList.toggle('close');
});
