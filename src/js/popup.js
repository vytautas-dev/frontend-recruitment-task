const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const resetButton = document.querySelector('.popup__reset');
const overlay = document.getElementById('overlay');
const counter = document.getElementById('counter');


// function open and close popup & start function click counter

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
    clickCounter();
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.popup.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.popup')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal === null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal === null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}


// function count the clicks & if clicks are more than 4 shows reset button

let counts = localStorage.length === 0 ? 0 : localStorage.getItem('counter');
const popupDesc = document.querySelector('.popup__description');


function clickCounter() {   
 if(counts > 4) {
  showResetBtn();
  counter.innerHTML = `${counts} times`     
  return;
 }   
  counts++;
  localStorage.setItem('counter', counts);
  counter.innerHTML = counts <= 1 ? `${counts} time` : `${counts} times` 
}

function showResetBtn() {
  resetButton.classList.add('active');   
}

function closeResetBtn() {
  resetButton.classList.remove('active');
  counter.innerHTML = `${counts} times`  
  showInfo();
}

function resetCounter() {
  localStorage.clear();
  counts = 0;
  closeResetBtn()
}

function showInfo() {
  const info = document.querySelector('.popup__info') 
  info.classList.add('active');

  setTimeout(() => {
info.classList.remove('active');
  }, 2000)
}


resetButton.addEventListener('click', resetCounter);