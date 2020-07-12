"use strict";

let tickTackToe = {
    //Игровое поле
    gameTableElement: document.getElementById('game'),
    status: 'playing',
    mapValues: [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ],
    phase: 'X',
    //При открытии страницы запускается метод запуска игры
    //Инициализация игры
    init(){
        //Вывод всех ячеек
        this.renderMap();
        //Инициализация обработчиков событий
        this.initEventHandlers();
    },

    //вывод ячеек в html
    
    renderMap(){
    for(let row = 0; row < 3; row++){
        const tr = document.createElement('tr');
        this.gameTableElement.appendChild(tr);
        for(let col = 0; col < 3; col++){
            let td = document.createElement('td');
            //координаты
            td.dataset.row = row.toString(); 
            td.dataset.col = col.toString();
            tr.appendChild(td);
            }
        }
    },

    initEventHandlers(){
        //Ставим обработчик, при клике на таблицу вызовется функция this.cellClickHandler.
        this.gameTableElement.addEventListener('click', event => this.cellClickHandler(event)); 
    },

    //Обработчик события клика
    cellClickHandler(event){
        if(!this.isCorrectClick(event)){
            return;
        }

        //заполняем ячейку
        this.fillCell(event);
        //Если кто-то выйграл, заходим в if
        if(this.hasWon()){
            //Ставим статус в "остановлено".
            this.setStatusStopped();
            //Сообщаем о победе пользователя
            this.sayWonPhrase();
        } 
        //меняем игрока
        this.togglePhase();
    },
    //Был ли коррректным клик в описании событии event
    
    isCorrectClick(event){
        return this.isStatusPlaying() && this.isClickByCell(event) && this.isCellEmpty(event);
    },

    isStatusPlaying(){ 
        return this.status === 'playing';
    },

    isClickByCell(event){
        return event.target.tagName === 'TD';
    },

    isCellEmpty(event){
        //Получаем строку и колонку, куда кликнули
        let row = +event.target.dataset.row;
        let col = +event.target.dataset.col;

        return this.mapValues[row][col] === '';
    },

    fillCell(event){
        //Получаем строку и колонку, куда кликнули
        let row = +event.target.dataset.row;
        let col = +event.target.dataset.col;

        //Заполняем ячейку и ставим значение в массиве, в свойстве mapValues
        this.mapValues[row][col] = this.phase;
        event.target.textContent = this.phase;
    },

    //Выйгрышная ситуация на карте
    hasWon() {

        return this.isLineWon({ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }) ||
            this.isLineWon({ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }) ||
            this.isLineWon({ x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }) ||

            this.isLineWon({ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }) ||
            this.isLineWon({ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }) ||
            this.isLineWon({ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }) ||

            this.isLineWon({ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2 }) ||
            this.isLineWon({ x: 0, y: 2 }, { x: 1, y: 1 }, { x: 2, y: 0 });
    },

    isLineWon(a, b, c){
        let value  = this.mapValues[a.y][a.x] + this.mapValues[b.y][b.x] + this.mapValues[c.y][c.x];
        return value === 'XXX' || value === '000'
    },

    setStatusStopped(){
        this.status = 'stopped'
    },

    sayWonPhrase(){
        let figure = this.phase === 'X' ? "Крестики" : "Нолики";
        alert (`${figure} выйграли!`);
    },
    togglePhase(){
        this.phase = this.phase === 'X' ? '0' : 'X';
    },
    
};
tickTackToe.init();