function selectImage(imgURL, name) {
    document.getElementById('cardImg').setAttribute('src', imgURL);
    document.querySelector('.card_container .contentBx h2').innerHTML = name
    showChoiceCard();
}

function showChoiceCard() {
    var card_container = document.querySelector('.card_container');
    card_container.style.opacity = 1;
    card_container.scrollIntoView();
    document.scrollTop += 50;
}