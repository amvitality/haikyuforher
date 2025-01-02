const revealLoveButton = document.getElementById('revealLove');
const popup = document.getElementById('popup');
const closePopupButton = document.getElementById('closePopup');
const body = document.body;

revealLoveButton.addEventListener('click', () => {
    popup.classList.remove('hidden');
    body.classList.add('popup-active');
});

closePopupButton.addEventListener('click', () => {
    popup.classList.add('hidden');
    body.classList.remove('popup-active');
});
