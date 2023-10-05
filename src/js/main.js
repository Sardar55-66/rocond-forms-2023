//интерактив в блоке с добавлением файла


let form = document.querySelector('.forms')
form.addEventListener('change', (e) => {
    if (e.target.classList.contains('first-input')) {
        document.querySelector('.first-wrapper').style.display = "flex";
        document.querySelector('.first-btn-text').style.display = "flex";
        document.querySelector('.first-btn-text').textContent = e.target.value
        document.querySelector('.first-input').style.display = "none"
    }
    
    if (e.target.classList.contains('sec-input')) {
        document.querySelector('.sec-wrapper').style.display = "flex";
        document.querySelector('.sec-btn-text').style.display = "flex";
        document.querySelector('.sec-btn-text').textContent = e.target.value
        document.querySelector('.sec-input').style.display = "none"
    }
})

form.addEventListener('click', (e) => {
    if (e.target.classList.contains('first-img')) {
        document.querySelector('.first-wrapper').style.display = "none";
        document.querySelector('.first-btn-text').style.display = "none";
        document.querySelector('.first-input').style.display = "flex"
        document.querySelector('.first-input').value = ''
    }
    
     if (e.target.classList.contains('sec-img')) {
        document.querySelector('.sec-wrapper').style.display = "none";
        document.querySelector('.sec-btn-text').style.display = "none";
        document.querySelector('.sec-input').style.display = "flex"
        document.querySelector('.sec-input').value = ''
    }
})


// валидация


form.addEventListener('submit', (e) => {
    e.preventDefault()

    let inputFields = Array.from(form.querySelectorAll('.validation-check'))
    inputFields.forEach((el) => {
        if (el.value === '') {
            let errorDiv = document.createElement('div')
            errorDiv.classList.add('error')
            errorDiv.textContent = 'field is empty'
            let parrent = el.parentNode
            el.classList.add('input-field-error')
            parrent.insertBefore(errorDiv, el.nextSibling)
            
        } else {
            
        let errors = Array.from(form.querySelectorAll('.error'))
        errors.map(el => el.remove())
            return el
        }

    })
})