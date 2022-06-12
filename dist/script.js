const toggle = document.getElementsByClassName('toggle')[0];
const nav = document.getElementsByClassName('menu');




toggle.addEventListener('click', function(){

    nav[0].classList.toggle('active');
});
