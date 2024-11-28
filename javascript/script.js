const field = document.querySelector('.grid')

let snakeY = 10;
let snakeX = 10;
let snakeBody = [[snakeX, snakeY]];
let appleY = 2;
let appleX = 4;

let velocityY = 0;
let velocityX = 0;

function casualPosition(){
    appleY = Math.floor(Math.random() * 20) + 1;
    appleX = Math.floor(Math.random() * 20) + 1;
}

function startGame(){
    snakeY += velocityY;
    snakeX += velocityX;
    snakeBody.unshift([snakeX, snakeY])
    let updateGame = ` 
        <div id='food' style="grid-row: ${appleY}; grid-column: ${appleX};"></div>`
    for (let i = 0; i < snakeBody.length; i++) {
        updateGame += `
        <div id="snake" style="grid-row: ${snakeBody[i][1]}; grid-column: ${snakeBody[i][0]};"></div>
        `
        
    }
    if(snakeY == appleY && snakeX == appleX){
        snakeBody.unshift([snakeX, snakeY])
        casualPosition()
    }
    if(snakeY == 0 || snakeX == 0 || snakeY == 20 || snakeX == 20){
        clearInterval(start);
        setTimeout(() =>{
            gameOver()
           
        }, 500)
    }
    field.innerHTML = updateGame
    snakeBody.pop([snakeX, snakeY])
    
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

function gameOver(){
    myModal.style = "display: block;"
    snakeY = 10;
    snakeX = 10;
    snakeBody = [[snakeX, snakeY]];
    casualPosition()
    velocityY = 0;
    velocityX = 0;
}

