'use strict'
document.head.insertAdjacentHTML("afterbegin", '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">');

let slider = document.querySelector('.slider');

//Создаем иконку загрузки

let loadIcon = document.createElement('i');
loadIcon.classList.add('fas', 'fa-spinner', 'fa-spin');
slider.insertAdjacentElement("afterbegin", loadIcon);

//левая
let leftArrow = document.createElement('i');
leftArrow.classList.add('fas', 'fa-chevron-circle-left', 'slider-leftArrow');
slider.insertAdjacentElement("beforeend", leftArrow);


// Создаем правую стрелку
let rightArrow = document.createElement('i');
rightArrow.classList.add('fas', 'fa-chevron-circle-right', 'slider-rightArrow');
slider.insertAdjacentElement("beforeend", rightArrow);


window.addEventListener('load', function () {
    leftArrow.addEventListener('click', function () {
        images.setNextLeftImage();
    });

    rightArrow.addEventListener('click', function () {
        images.setNextRightImage();
    });

    images.init();
 loadIcon.style.display = "none";
});


let images = {
     /* {int} Номер текущего изображения */
    currentIdx: 0,
    /* {HTMLDivElement[]} slides элементы слайдов */
    slides: [],

     /** Получаем все слайды и показываем первый слайд. */
     init() {
        this.slides = document.querySelectorAll('.slider-item');
        this.showImageWithCurrentIdx();
    },

    showImageWithCurrentIdx(){
        this.slides[this.currentIdx].classList.remove('hidden-slide');
        },

        hideVisibleImage(){
            document.querySelector('.slider-item:not(.hidden-slide)')
            .classList
            .add('hidden-slide');
        },

        setNextLeftImage(){
            this.hideVisibleImage();
            if(this.currentIdx == 0){
                this.currentIdx = this.slides.length - 1;
            } else {
                this.currentIdx--;
            }
            this.showImageWithCurrentIdx();
            //Добавляем анимацию
        const currentSlide = this.slides[this.currentIdx];
        currentSlide.classList.add('animated', 'slideInLeft');
        currentSlide.classList.remove('hidden');
        setTimeout(() => {
            currentSlide.classList.remove('slideInLeft');
        }, 1000);
    },
    /** Переключиться на следующее изображение. */
    setNextRightImage(){
        this.hideVisibleImage();
        if (this.currentIdx == this.slides.length - 1) {
            this.currentIdx = 0;
        } else {
            this.currentIdx++;
        }
        this.showImageWithCurrentIdx();
        //добавляем анимацию
        const currentSlide = this.slides[this.currentIdx];
        currentSlide.classList.add('animated', 'slideInRight');
        currentSlide.classList.remove('hidden');
        setTimeout(() => {
            currentSlide.classList.remove('slideInRight');
        }, 1000);
    },

};