let openButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closeButton = popup.querySelector('.popup__close-btn');
let subButton = popup.querySelector('.popup__sub-button');
let name = document.querySelector('.popup__input_type_username');
let job = document.querySelector('.popup__input_type_username-description');
let nameOnPage = document.querySelector('.profile__name');
let jobOnPage = document.querySelector('.profile__description');
let formElement = popup.querySelector('.popup__container');

let openPopup = () => {
  popup.classList.add('popup_opened');
  name.value = nameOnPage.textContent;
  job.value = jobOnPage.textContent;
}

let closePopup = () => {
  popup.classList.remove('popup_opened');
}

openButton.addEventListener('click', openPopup);

closeButton.addEventListener('click', closePopup);

subButton.addEventListener('click', closePopup);

function handleFormSubmit (evt) {
    evt.preventDefault();

    nameOnPage.textContent = name.value;
    jobOnPage.textContent = job.value;
}

formElement.addEventListener('submit', handleFormSubmit);
