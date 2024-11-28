const field = document.querySelector('.grid')

let snakeY = 10;
let snakeX = 6;

let appleY = 2;
let appleX = 1;

let velocityY = 0;
let velocityX = 0;

function startGame(){
    snakeY += velocityY;
    snakeX += velocityX;
    field.innerHTML = `
        <div id='food' style="grid-row: ${appleY}; grid-column: ${appleX};"></div>
        <div id="snake" style="grid-row: ${snakeY}; grid-column: ${snakeX};"></div>
    `
    
}

let start = setInterval(() =>{
    startGame()
    if(snakeY == 0 || snakeX == 0 || snakeY == 20 || snakeX == 20){
        clearInterval(start);
        setTimeout(() =>{
            myModal.style = "display: block;"

        }, 500)
    }
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
    snakeY = 10;
    snakeX = 6;
    appleY = 2;
    appleX = 1;
    velocityY = 0;
    velocityX = 0;
    myModal.style = "display: none;"
    start = setInterval(() =>{
        startGame()
        if(snakeY == 0 || snakeX == 0 || snakeY == 20 || snakeX == 20){
            clearInterval(start);
            setTimeout(() =>{
                myModal.style = "display: block;"
    
            }, 500)
        }
    }, 200)
})