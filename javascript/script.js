const field = document.querySelector('.grid')

let headY = 5;
let headX = 5;
let snakeBody = [[headX, headY]];
let appleY = 1;
let appleX = 1;

let velocityY = 0;
let velocityX = 0;
score.innerText = 0

function casualPosition(){
    appleY = Math.floor(Math.random() * 20) + 1;
    appleX = Math.floor(Math.random() * 20) + 1;
    for (let i = 0; i < snakeBody.length; i++) {
        if(snakeBody[i][0] == appleX && snakeBody[i][1] == appleY){
            casualPosition()
        }
        
    }
}

function startGame(){

    snakeBody.pop([headX, headY])
    headY += velocityY;
    headX += velocityX;
    
    snakeBody.unshift([headX, headY])
    for (let i = 1; i < snakeBody.length; i++) {
        if(snakeBody[0][0] == snakeBody[i][0] && snakeBody[0][1] == snakeBody[i][1]){
            gameOver('Devi mangiare la mela non il serpente')
        }
    }
    let updateGame = ` 
        <div id='food' style="grid-row: ${appleY}; grid-column: ${appleX};"></div>`
    for (let i = 0; i < snakeBody.length; i++) {
        if(!i){
            updateGame += `
            <div id="snake" style="grid-row: ${snakeBody[i][1]}; grid-column: ${snakeBody[i][0]}; background-color: red;">${i}</div>
            `

        }else{
            updateGame += `
            <div id="snake" style="grid-row: ${snakeBody[i][1]}; grid-column: ${snakeBody[i][0]};">${i}</div>
            `
        }
        
    }
    
    // eat the apple
    if(headY == appleY && headX == appleX){
        snakeBody.push([headX, headY])
        score.innerText = Number(score.innerText) + Number(sumDifficulty(snakeBody.length))
        casualPosition()
       
    }
    if(headY == 0 || headX == 0 || headY == 21 || headX == 21){
        gameOver('Hai preso il muro Fratelli')
        
    }
    // console.log(snakeBody)
    

    
    field.innerHTML = updateGame
    
    
}

let start = setInterval(() =>{
    startGame()
}, 200)

document.addEventListener('keydown', function(e){
    
    let press = e.key
    
    if(press == 'ArrowDown'){
        
        velocityY = 1;
        velocityX = 0;
    }else if(press == 'ArrowUp'){
        
        velocityY = -1;
        velocityX = 0;
    }else if(press == 'ArrowLeft'){
        
        velocityY = 0;
        velocityX = -1;
    }else if(press == 'ArrowRight'){
       
        velocityY = 0;
        velocityX = 1;
    }
    // debug
    // console.log(snakeBody[0])
    // console.log(snakeBody[1] ?? '')
    // console.log(snakeBody[2] ?? '')
    // console.log(snakeBody[3] ?? '')
    // startGame()
    // console.log(snakeBody[0])
    // console.log(snakeBody[1] ?? '')
    // console.log(snakeBody[2] ?? '')
    // console.log(snakeBody[3] ?? '')
})
// debug
// startGame()
closeModal.addEventListener('click', () =>{
    
    myModal.style = "display: none;"
    start = setInterval(() =>{
        startGame()
        
    }, 200)
})

function gameOver(reason){
    clearInterval(start);
    textModal.textContent = reason
    scoreText.textContent = `Hai totalizzato ${score.textContent} punti`
    myModal.style = "display: block;"
    headY = 10;
    headX = 10;
    snakeBody = [[headX, headY]];
    // casualPosition()
    velocityY = 0;
    velocityX = 0;
    score.innerText = 0
}

function sumDifficulty(snakeLenght){
    return Math.floor(10 + snakeLenght * 2);
}