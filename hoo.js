var burger = document.querySelector('.icon');
var nav = document.querySelector('.navs');
var main = document.querySelector('header');









burger.addEventListener("click", function(){
    if (nav.style.display =='block') {
        nav.style.display = 'none';
        main.style.transform = 'translateX(0px)';
    } else {
        nav.style.display = 'block';
        main.style.transform = 'translateX(-80px)';
    }
    })