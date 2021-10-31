let menuButton = document.querySelector('.fa-bars');
let modal = document.querySelector('.modal');
let cancelButton = document.querySelector('.button--cancel');
let form = document.querySelector('.form');
let fieldset = document.querySelector('.fieldset--data');
let checkboxes = document.querySelectorAll('input[type=checkbox]')
let pencilIcons = document.querySelectorAll('.bi-pencil-fill');
let spanLabels = document.querySelectorAll(".label")
// console.log(spanLabels)


function displayModal(hideClass, showClass, mainBgClass) {
    modal.classList.remove(hideClass)
    modal.classList.add(showClass)
    form.classList.add(mainBgClass)
    fieldset.classList.add(mainBgClass)
}

function hideModal(showClass,hideClass,mainBgClass) {
    modal.classList.remove(showClass)
    form.classList.remove(mainBgClass)
    fieldset.classList.remove(mainBgClass)
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

    
    })
})

menuButton.addEventListener('click', ()=> { displayModal('hide', 'show','main__add-bg')})
cancelButton.addEventListener('click', ()=> { hideModal('show', 'hide', 'main__add-bg')})

