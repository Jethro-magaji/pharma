let menuButton = document.querySelector('.fa-bars');
let modal = document.querySelector('.modal');
let cancelButton = document.querySelector('.button--cancel');
let form = document.querySelector('.form');
let fieldset = document.querySelector('.fieldset--data');
let checkboxes = document.querySelectorAll('input[type=checkbox]')
console.log(checkboxes, menuButton);


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

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', ()=> {
        
    })
})

menuButton.addEventListener('click', ()=> { displayModal('hide', 'show','main__add-bg')})
cancelButton.addEventListener('click', ()=> { hideModal('show', 'hide', 'main__add-bg')})