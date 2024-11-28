const field = document.querySelector('.grid')
const snake = document.querySelector('.snake');
const apple = document.querySelector('.food');

let snakeY = 4;
let snakeX = 6;

let appleY = 2;
let appleX = 1;



function startGame(){
    field.innerHTML += `
        <div class='food' style="grid-row: ${appleY}; grid-column: ${appleX};"></div>
    `
    field.innerHTML +=  `
        <div class="snake" style="grid-row: ${snakeY}; grid-column: ${snakeX};">
                <div class="eye"></div>
                <div class="eye"></div>
            </div>
    `
}

startGame();

document.addEventListener('keydown', function(e){
    let press = e.key
    if(press == 'ArrowDown'){
        snake.style = 'border-top-left-radius: 5px;border-top-right-radius: 5px; border-bottom-left-radius:50%;border-bottom-right-radius: 50%; flex-direction: row; align-items: flex-end;'
    
    }else if(press == 'ArrowUp'){
        snake.style = "border-top-left-radius: 50%;             border-top-right-radius: 50%; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; align-items: flex-start; "
    }else if(press == 'ArrowLeft'){
        snake.style = "border-top-left-radius: 50%;             border-top-right-radius: 5px; border-bottom-left-radius: 50%; border-bottom-right-radius: 5px; flex-direction: column; align-items: flex-start;"
    }else if(press == 'ArrowRight'){
        snake.style = "border-top-left-radius: 5px;             border-top-right-radius: 50%; border-bottom-left-radius: 5px; border-bottom-right-radius: 50%; flex-direction: column; align-items: flex-end;"
    }
    
 

})