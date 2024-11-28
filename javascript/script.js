const field = document.querySelector('.grid')

let snakeY = 10;
let snakeX = 10;
let snakeBody = [[snakeX, snakeY]];
let appleY = 2;
let appleX = 4;

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

    snakeBody.pop([snakeX, snakeY])
    snakeY += velocityY;
    snakeX += velocityX;
    
    snakeBody.unshift([snakeX, snakeY])
    for (let i = 1; i < snakeBody.length; i++) {
        if(snakeBody[0][0] == snakeBody[i][0] && snakeBody[0][1] == snakeBody[i][1]){
            gameOver('Il serpente si è mangiato da solo.')
        }
    }
    let updateGame = ` 
        <div id='food' style="grid-row: ${appleY}; grid-column: ${appleX};"></div>`
    for (let i = 0; i < snakeBody.length; i++) {
        if(!i){
            updateGame += `
            <div id="snake" style="grid-row: ${snakeBody[i][1]}; grid-column: ${snakeBody[i][0]}; background-color: red;"></div>
            `

        }else{
            updateGame += `
            <div id="snake" style="grid-row: ${snakeBody[i][1]}; grid-column: ${snakeBody[i][0]};"></div>
            `
        }
        
    }
    
    // eat the apple
    if(snakeY == appleY && snakeX == appleX){
        snakeBody.push([snakeX, snakeY])
        score.innerText = Number(score.innerText) + Number(sumDifficulty(snakeBody.length))
        casualPosition()
    }
    if(snakeY == 0 || snakeX == 0 || snakeY == 20 || snakeX == 20){
        gameOver('Hai toccato le pareti. ')
        
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
    
 

})

closeModal.addEventListener('click', () =>{
    
    myModal.style = "display: none;"
    start = setInterval(() =>{
        startGame()
        
    }, 200)
})

function gameOver(reason){
    clearInterval(start);
    textModal.innerText = reason + "GAME OVER!!!!"
    myModal.style = "display: block;"
    snakeY = 10;
    snakeX = 10;
    snakeBody = [[snakeX, snakeY]];
    casualPosition()
    velocityY = 0;
    velocityX = 0;
    score.innerText = 0
}

function sumDifficulty(snakeLenght){
    return Math.floor(10 + snakeLenght * 2);
}