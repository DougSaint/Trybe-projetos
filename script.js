listaEl = document.querySelectorAll(".color"); // Paleta de cores


window.onload = () => {
    listaEl[0].classList.add('selected')
    let size
    if(localStorage.getItem('boardSize')){
        size = parseInt(localStorage.getItem('boardSize'))
    }else{
        size = 5;
    }
    generatePixelBoard(size)
    previousState()
    getBoard()

};

const changeSize = document.querySelector("#generate-board");
changeSize.addEventListener('click', palleteSize)
function palleteSize(){
    const value = (document.querySelector('#board-size')).value
    const pixelList = document.querySelectorAll('.pixel-line')
    for(x of pixelList){
        x.remove()
    }
    if(value){
        if(value < 5){
            generatePixelBoard(5);
            
        }else if (value > 50){
            generatePixelBoard(50);
        }
        else{
            generatePixelBoard(value)
        }
    }else{
        alert("Board inválido!")
    }

}



//Seleciona a Cor


const palleteCores = document.querySelectorAll('.color');  // pegando todos os 4 quadrados
palleteCores.forEach(el => {
    el.addEventListener('click', () => {
        if(el.className != 'color selected'){ // checa se o elemento que to clicando é o selecionado
            const removeSelecteds = document.querySelector('.selected') 
            removeSelecteds.classList.remove("selected")
            el.classList.add('selected')
        }
    })
});



//Limpar

const clear = document.querySelector('#clear-board')
clear.addEventListener('click', clearBoard)

function clearBoard() {
    const allPixels = document.querySelectorAll('.pixel')
    allPixels.forEach(pixel => {
        pixel.style.backgroundColor = "white"
    })
}

//Gera as cores aleatorias
coresAleatorias = document.querySelector('#button-random-color');
coresAleatorias.addEventListener('click', addColor)

function colorGen(){
    let array =     ['#000000']
    for( x = 0; array.length < 4; x++){
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        if(randomColor != 'ffffff' && randomColor != '000000'){
            array.push('#'+randomColor)
        }
    }
    return array;
}


//adiciona as cores aleatorias na paleta de cores
function addColor(){
    listaEl = document.querySelectorAll(".color");
    let listColor = colorGen();
    listaEl[0].style.backgroundColor = 'black'

    for (let index = 1; index<listaEl.length; index++){
        listaEl[index].style.backgroundColor = listColor[index]
    }
    localStorage.setItem('colorPalette' ,JSON.stringify(listColor))
}

//Carrega a paleta antiga.
function previousState(){
    listaEl[0].style.backgroundColor = 'black'
    if(localStorage.getItem('colorPalette')) {
        const listColor = JSON.parse(localStorage.getItem('colorPalette'));
        for (let index = 1; index<listaEl.length; index++){
            listaEl[index].style.backgroundColor = listColor[index]
        }
    }else{
        addColor();
    }
}


//Gera o pixel board
function generatePixelBoard(number){
    const pixelBoard = document.querySelector('#pixel-board')
    pixelBoard.style.width =`${50*number}px`
    pixelBoard.style.margin = "auto";
    pixelBoard.style.marginTop ="30px"
    
    for( x = 0; x < number; x++){

        const pixelLine = document.createElement('div');
        pixelLine.classList.add('pixel-line')

        for( l = 0; l < number; l++){
            const pixel = document.createElement('div');
            pixel.classList.add('pixel')
            pixelLine.appendChild(pixel)
        }
        pixelBoard.appendChild(pixelLine)
    } 
    localStorage.setItem('boardSize',number.toString())
    paint()
}

function paint() {

    const pixelBoard = document.querySelectorAll('.pixel');
    pixelBoard.forEach(pixel  => {
        pixel.addEventListener('click', () => {
            const paint = document.querySelector('.selected');
            const pincel = paint.style.backgroundColor
            pixel.style.backgroundColor = pincel
            savePixel()
        })

    })

}

function savePixel(){
    let savePixel = []
    const pixelBoard = document.querySelectorAll('.pixel');
    pixelBoard.forEach(pixel => {
        savePixel.push(pixel.style.backgroundColor)
    });
    localStorage.setItem('pixelBoard', JSON.stringify(savePixel))
}

function getBoard() {
    const pixelBoard = document.querySelectorAll('.pixel');
    console.log(pixelBoard)
    if(localStorage.getItem('pixelBoard')){
        const lastPixelBoard  = JSON.parse(localStorage.getItem('pixelBoard'))
        for (let index = 0; index < pixelBoard.length; index++) {
        pixelBoard[index].style.backgroundColor = lastPixelBoard[index];
    }
   }
}
































