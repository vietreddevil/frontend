$(document).ready(() => {
    document.documentElement.scrollTop = 0;
});
window.onscroll = function () { scrollTrigger() };
var scrollToTop = document.getElementById("scrollToTop")
function scrollTrigger() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTop.style.display = "block";
    } else {
        scrollToTop.style.display = "none";
    }
}

function selectImage(imgURL, name, age, level) {
    $('.career').css({'display': 'none', 'opacity': 0, 'visibility': 'hidden'});
    document.getElementById('cardImg').setAttribute('src', imgURL);
    document.querySelector('.card_container .contentBx h2').innerHTML = name
    $('.age_1').text(age - 1);
    $('.age_2').text(age);
    $('.age_2').css({ 'background-color': '#9dbc28' });
    $('.age_3').text(Number(age) + 1);
    $('.contentBx .color span:not(.' + level + ')').css({'opacity' : '0.2'});
    $('.contentBx .color .' + level).css({'opacity' : '1'});
    showChoiceCard();
}

function showChoiceCard() {
    var card_container = document.querySelector('.card_container');
    card_container.style.opacity = 1;
    card_container.scrollIntoView();
    document.scrollTop += 50;
}

function goToTop() {
    // window.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
}

function showCareer() {
    changeTimeLineInfo();
    $('.career').css({'display': 'block', 'opacity': 1, 'visibility': 'visible'});
    document.querySelector('.career').scrollIntoView();
}

function changeTimeLineInfo() {
    
}