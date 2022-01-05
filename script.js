var red = document.getElementById('red')
var yellow = document.getElementById('yellow')
var green = document.getElementById('green')
var off = document.getElementById('desligar')

function vermelho(){
    semaforo.src = './img/vermelho.png'
}

function amarelo(){
    semaforo.src = './img/amarelo.png'
}

function verde(){
    semaforo.src = './img/verde.png'
}

function desligar(params) {
    semaforo.src = './img/desligado.png'
}


red.addEventListener('click', vermelho)
yellow.addEventListener('click', amarelo)
green.addEventListener('click', verde)
off.addEventListener('click', desligar)