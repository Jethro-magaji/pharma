let menuButton = document.querySelector('.fa-bars');
let modal = document.querySelector('.modal');
let cancelButton = document.querySelector('.button--cancel');
let overlayContainer = document.querySelector('.overlay-container');
let fieldset = document.querySelector('.fieldset--data');
let checkboxes = document.querySelectorAll('input[type=checkbox]')
let pencilIcons = document.querySelectorAll('.bi-pencil-fill');
let spanLabels = document.querySelectorAll(".label");
let radioButtons = document.querySelectorAll("input[type=radio]");
console.log(radioButtons);

console.log(overlayContainer)


function displayModal(hideClass, showClass, mainBgClass) {
    modal.classList.remove(hideClass)
    modal.classList.add(showClass)
    overlayContainer.classList.add(mainBgClass)
    // fieldset.classList.add(mainBgClass)
}

function hideModal(showClass,hideClass,mainBgClass) {
    modal.classList.remove(showClass)
    overlayContainer.classList.remove(mainBgClass)
    // fieldset.classList.remove(mainBgClass)
    modal.classList.add(hideClass)
}

pencilIcons.forEach(pencilIcon => {
    pencilIcon.addEventListener('click', ()=> {
    let textInput = document.createElement('input')
    textInput.setAttribute('class', 'pencil-input')
    let parent = pencilIcon.parentNode 
    let label = parent.children[2]
    textInput.value = label.textContent
    parent.replaceChild(textInput, label)   
    console.log(parent.lastElementChild);
    parent.lastElementChild.classList.remove('hide-mic')
    parent.lastElementChild.classList.add('show-mic')
    pencilIcon.style.display = 'none'
    
    })
})

menuButton.addEventListener('click', ()=> { displayModal('hide', 'show','overlay')})
cancelButton.addEventListener('click', ()=> { hideModal('show', 'hide', 'overlay')})

function deselectRadioButton(document, radioButtons) {
 document.addEventListener('mouseup', (e) => {
     if(e.target.type === 'radio' && e.target.checked === true) {
         setTimeout(() => {
             e.target.checked = false
         }, 0);
     }
 })
}


deselectRadioButton(document,radioButtons)