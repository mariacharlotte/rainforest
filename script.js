var links = document.querySelectorAll('.navlinks .link');
var box1 = document.querySelector('#forproduct');
var box2 = document.querySelector('#fordevelopers');
var box3 = document.querySelector('#forcompany');
var navdiv = document.querySelector('.div1 .navdiv');
var profiles = document.querySelectorAll('.two .profile');
var threeboxes = document.querySelectorAll('.whitediv .box3');
var sixlines = document.querySelectorAll('.fourth .sixlines .line');
var ptags = document.querySelectorAll('.fourth .sixlines .pdiv');
var baricon = document.querySelector('.navdiv .nav .bar');
var bar = document.querySelector('.fa-bars');
var navdiv = document.querySelector('.container .navdiv');
var navtoggle = document.querySelector('.navdiv .togglenav');
var navbarlinks = document.querySelectorAll('.navdiv .togglenav #navbarlink');

baricon.addEventListener('click', () => {
    navdiv.classList.toggle('colorbg');
    bar.classList.toggle('fa-xmark');

});

navbarlinks.forEach((navlink) => {
    navlink.addEventListener('click', () => {

        navlink.firstElementChild.lastElementChild.classList.toggle('rotatearr');
        navlink.lastElementChild.classList.toggle('display');
    })
});

function removecursor() {
    $(document).ready(function () {
        $(box1).slideUp(1200);
        $(box2).slideUp(1200);
        $(box3).slideUp(1200);
    });
}

links.forEach(function (link) {
    link.addEventListener('mouseover', () => {
        // link.firstElementChild.style.color = 'green';

        if (link.id == 'link1') {
            $(box1).fadeIn().css('display', 'grid');
            box2.style.display = 'none';
            box3.style.display = 'none';
        } else if (link.id == 'link2') {
            $(box2).fadeIn().css('display', 'grid');
            box1.style.display = 'none';
            box3.style.display = 'none';
        } else {
            $(box3).fadeIn().css('display', 'grid');
            box1.style.display = 'none';
            box2.style.display = 'none';
        }
    });
});

navdiv.addEventListener('mouseleave', removecursor);

profiles.forEach(function (profile) {
    profile.addEventListener('click', () => {
        if (profile.className.includes('changeSide')) {
            profile.classList.remove('changeSide');
        } else {
            profile.classList.add('changeSide');
        }
    });
});

threeboxes.forEach(function (box) {
    box.addEventListener('click', function () {

        if (this.previousElementSibling) {
            this.previousElementSibling.classList.remove('green');
        }
        this.classList.add('green');
        if (this.nextElementSibling) {
            this.nextElementSibling.classList.remove('green');
        }

    });
});

sixlines.forEach((line) => {
    // var toggle = true;
    line.addEventListener('click', () => {
        line.firstElementChild.firstElementChild.classList.toggle('transform');
        line.firstElementChild.nextElementSibling.classList.toggle('display'); // p tag

        // toggle ? p.classList.add('transform') : p.classList.remove('transform');
        // toggle ? span.classList.add('display') : span.classList.remove('display');
        // toggle = !toggle;
    });
});