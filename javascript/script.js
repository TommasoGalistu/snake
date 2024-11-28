const snake = document.querySelector('.snake');


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