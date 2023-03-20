let certificate = document.querySelector('#navli2');
let certficates = document.querySelector('#bodydiv9');
let body = document.querySelector('body');
let back1 = document.querySelector('#bd9div3');
let back2 = document.querySelector('#bd10div3');
let project1 = document.querySelector('#navli3');
let project2 = document.querySelector('#bd9div2');
let projects = document.querySelector('#bodydiv10');
let contact1 = document.querySelector('#navli1');
let contact2 = document.querySelector('#bd10div2');
let contacts = document.querySelector('#bodydiv11');
let links = document.querySelector('#bodydiv8');
let backtoportfolio = document.querySelector('#backtoportfolio');
certificate.addEventListener('click', function () {
    certficates.style.visibility = 'visible';
    body.style.visibility = 'hidden';
    body.style.overflow = 'hidden';
})
back1.addEventListener('click', function () {
    certficates.style.visibility = 'hidden';
    body.style.visibility = 'visible';
    body.style.overflow = 'visible';
})
project1.addEventListener('click', function () {
    projects.style.visibility = 'visible';
    body.style.visibility = 'hidden';
    body.style.overflow = 'hidden';
})
project2.addEventListener('click', function () {
    projects.style.visibility = 'visible';
    certficates.style.visibility = 'hidden';
    body.style.visibility = 'hidden';
    body.style.overflow = 'hidden';
})
back2.addEventListener('click', function () {
    projects.style.visibility = 'hidden';
    body.style.visibility = 'visible';
    body.style.overflow = 'visible';
})
contact1.addEventListener('click', function () {
    contacts.style.visibility = 'visible';
    links.style.visibility = 'visible';
    body.style.visibility = 'hidden';
    body.style.overflow = 'hidden';
})
contact2.addEventListener('click', function () {
    contacts.style.visibility = 'visible';
    links.style.visibility = 'visible';
    projects.style.visibility = 'hidden';
    body.style.visibility = 'hidden';
    body.style.overflow = 'hidden';
})
backtoportfolio.addEventListener('click', function () {
    contacts.style.visibility = 'hidden';
    body.style.visibility = 'visible';
    body.style.overflow = 'visible';
})