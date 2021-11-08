// let menuButton = document.querySelector('.fa-bars');
let modal = document.querySelector('.modal-custom');
let cancelButton = document.querySelector('.button--cancel');
let overlayContainer = document.querySelector('.overlay-container');
let fieldset = document.querySelector('.fieldset--data');
let checkboxes = document.querySelectorAll('input[type=checkbox]')
let pencilIcons = document.querySelectorAll('.bi-pencil-fill');
let spanLabels = document.querySelectorAll(".label");
let radioButtons = document.querySelectorAll("input[type=radio]");


function displayModal(hideClass, showClass, mainBgClass) {
    modal.classList.remove(hideClass)
    modal.classList.add(showClass)
    overlayContainer.classList.add(mainBgClass)
}

function hideModal(showClass,hideClass,mainBgClass) {
    modal.classList.remove(showClass)
    overlayContainer.classList.remove(mainBgClass)
    modal.classList.add(hideClass)
}

function createAttribute(textInput,key, value) {
    textInput.setAttribute(key, value)
}


function ReplaceLabelWithInput(parent,textInput,label) {
    parent.replaceChild(textInput, label)   
    parent.lastElementChild.classList.remove('hide-mic')
    parent.lastElementChild.classList.add('show-mic')
}

function hidePencilIcon(pencilIcon) {
    pencilIcon.style.display = 'none'
}

pencilIcons.forEach(pencilIcon => {
    pencilIcon.addEventListener('click', ()=> {
    let textInput = document.createElement('input')
    createAttribute(textInput, 'class', 'pencil-input')

    let parent = pencilIcon.parentNode 
    let label = parent.children[2] 
    textInput.value = label.textContent;
    
    ReplaceLabelWithInput(parent,textInput, label)

    hidePencilIcon(pencilIcon)
    })
})

// menuButton.addEventListener('click', ()=> { displayModal('hide', 'show','overlays')})
// cancelButton.addEventListener('click', ()=> { hideModal('show', 'hide', 'overlays')})

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