// 1. получить объект модального окна с классом .wrap
const modal = document.querySelector('.wrap');

// 2. получить тег span, используемый для закрытия окна
const closeBtn = document.querySelector('span');

// 3. получить кнопку, используемую для показа модального окна
const showBtn = document.querySelector('button');

// 4. назначить обработку клика на кнопку показа модального окна
// когда функция обработчик срабатывает она должна у модального
// окна удалять класс hidden
showBtn.addEventListener('click', function(){
    modal.classList.remove('rollOut', 'hidden');
    modal.classList.add('animated', 'rollIn');
});

// 5. назначить обработку клика на тег span, при клике
// в обработчике модальному окну должен быть добавлен
// класс hidden
closeBtn.addEventListener('click', function(){
    modal.classList.remove('rollIn');
    modal.classList.add('rollOut');
    setTimeout(function() {
        modal.classList.add('hidden');
    }, 1000);
});