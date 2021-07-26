window.addEventListener('DOMContentLoaded', (event) => {
    
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach((card) => {
        card.addEventListener('mouseover', (event) => {
            card.childNodes[3].classList.add('service-card__copy-box--expanded');
        })

        card.addEventListener('mouseleave', (event) => {
            card.childNodes[3].classList.remove('service-card__copy-box--expanded');
        })
    })


    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach((card) => {
        card.addEventListener('mouseover', (event) => {
            card.childNodes[3].classList.add('product-card__copy-box--expanded');
        })

        card.addEventListener('mouseleave', (event) => {
            card.childNodes[3].classList.remove('product-card__copy-box--expanded');
        })
    })

});