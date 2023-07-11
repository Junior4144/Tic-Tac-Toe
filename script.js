let game = ['','','','','','','','',''];
let gameBoard = document.querySelector('.gameBoard')
let player1 = true;
let player2 = false;

//factory



function createPlayer(name, color){

    const player = {
        name: name,
        color: color,
        turn: false
    };
    return player;
}

function checkforX(){

    let firstCondition = false;
    let counter = 0;

    let checkConditionOne = true;
    let futureCheckerOne = -1;
    let futureCheckerTwo = -1;
    let checkCondition =false;

    let secondCondition = false;
    let thirdCondition = false;

    let C5CheckerOne = -1;
    let C5CheckerTwo = -1;
    let C5Checker = false;

    let C6CheckerOne = -1;
    let C6CheckerTwo = -1;
    let C6Checker = false;


    for(let i =0;i < game.length;i++){

      if(game[i] === 'X' && i ==0){
        firstCondition = true;
      }
      else if((game[i] !='X') && (i < 3)){
        firstCondition = false;
      }


      if(game[i] === 'X' && i == 3){
        secondCondition = true;
      }
      else if((game[i] != 'X') && (i < 6)){
        secondCondition = false;
      }


      if(game[i] === 'X' && i == 6){
        thirdCondition = true;
      }
      else if((game[i] !='X') && (i < 9)){
        thirdCondition = false;
      }



      if(game[i] === 'X' && checkConditionOne === true){
        checkConditionOne = false;
        futureCheckerOne = i + 3;
        console.log("first C");
      }

      if(futureCheckerOne === i && game[i] === 'X'){
        futureCheckerTwo = i + 3;
        console.log("Second C");
      }

      if(futureCheckerTwo === i && game[i] === 'X'){
        checkCondition = true;
      }

      if(game[i] === 'X' && i === 0){
        C5CheckerOne = i + 4;
        console.log("C5 - first");
      }

      if(C5CheckerOne === i && game[i] === 'X'){
        C5CheckerTwo = i + 4;
        console.log("C5 - second");
      }

      if(C5CheckerTwo === i && game[i] === 'X'){
        C5Checker = true;
      }
/////////////

      if(game[i] === 'X' && i === 2){
        C6CheckerOne = i + 2;
        console.log("C6 - first");
      }

      if(C6CheckerOne === i && game[i] === 'X'){
        C6CheckerTwo = i + 2;
        console.log("C6 - second");
      }

      if(C6CheckerTwo === i && game[i] === 'X'){
        C6Checker = true;
      }



    }

    if(firstCondition === true){
        console.log("x wins - C1")
    }

    if(secondCondition === true){
        console.log("x wings - Condition C2")
    }
    if(thirdCondition === true){
        console.log("x wings - Condition C3")
    }

    if(checkCondition === true){
        console.log("x wins - C4")
    }
    if(C5Checker === true){
        console.log("x wins, C5")
    }
    if(C6Checker){
        console.log("x wins, C6")
    }
    
}

function checkforO(){
    let firstCondition = false;
    let counter = 0;

    let checkConditionOne = true;
    let futureCheckerOne = -1;
    let futureCheckerTwo = -1;
    let checkCondition =false;

    let secondCondition = false;
    let thirdCondition = false;

    let C5CheckerOne = -1;
    let C5CheckerTwo = -1;
    let C5Checker = false;

    let C6CheckerOne = -1;
    let C6CheckerTwo = -1;
    let C6Checker = false;


    for(let i =0;i < game.length;i++){

      if(game[i] === 'O' && i ==0){
        firstCondition = true;
      }
      else if((game[i] !='O') && (i < 3)){
        firstCondition = false;
      }


      if(game[i] === 'O' && i == 3){
        secondCondition = true;
      }
      else if((game[i] != 'O') && (i < 6)){
        secondCondition = false;
      }


      if(game[i] === 'O' && i == 6){
        thirdCondition = true;
      }
      else if((game[i] !='O') && (i < 9)){
        thirdCondition = false;
      }



      if(game[i] === 'O' && checkConditionOne === true){
        checkConditionOne = false;
        futureCheckerOne = i + 3;
        console.log("first C");
      }

      if(futureCheckerOne === i && game[i] === 'O'){
        futureCheckerTwo = i + 3;
        console.log("Second C");
      }

      if(futureCheckerTwo === i && game[i] === 'O'){
        checkCondition = true;
      }

      if(game[i] === 'O' && i === 0){
        C5CheckerOne = i + 4;
        console.log("C5 - first");
      }

      if(C5CheckerOne === i && game[i] === 'O'){
        C5CheckerTwo = i + 4;
        console.log("C5 - second");
      }

      if(C5CheckerTwo === i && game[i] === 'O'){
        C5Checker = true;
      }

      if(game[i] === 'O' && i === 2){
        C6CheckerOne = i + 2;
        console.log("C6 - first");
      }

      if(C6CheckerOne === i && game[i] === 'O'){
        C6CheckerTwo = i + 2;
        console.log("C6 - second");
      }

      if(C6CheckerTwo === i && game[i] === 'O'){
        C6Checker = true;
      }



    }

    if(firstCondition === true){
        console.log("O wins - C1")
        displayWinnerO();
    }

    if(secondCondition === true){
        console.log("O wings - Condition C2");
        displayWinnerO();
    }
    if(thirdCondition === true){
        console.log("O wings - Condition C3")
        displayWinnerO();
    }

    if(checkCondition === true){
        console.log("O wins - C4")
        displayWinnerO();
    }
    if(C5Checker === true){
        console.log("O wins, C5")
        displayWinnerO();
    }
    if(C6Checker){
        console.log("O wins, C6")
        displayWinnerO();
    }
}

function displayWinnerO(){
  //how that O won;
  
}


function displayALL(arr){
  //arr[0] = player1
  //arr[0] = player2

    for(let i =0; i < game.length;i++){

        let game_div  = document.createElement('div');
        game_div.classList.add('Section');
        game_div.textContent = game[i];
        
        game_div.addEventListener('click', function(){

            if(game_div.textContent === '' && player1 === true){
                game_div.textContent = 'X';
                game_div.style.color = arr[0].color;
                game[i] = 'X';
                console.log(game);
                player1 = false;
                player2 = true;
                checkforX();
            }
            else if(game_div.textContent === '' && player2 === true){
                game_div.textContent = 'O';
                game_div.style.color = arr[1].color;
                game[i] = 'O';
                console.log(game);
                player2 = false;
                player1 = true;
                checkforO();
            }
            
        })


        gameBoard.appendChild(game_div);
    }
}

const start_Screen = document.querySelector('.startScreen');
const chooseLeft = document.querySelectorAll('.chooseLeft');
const chooseRight = document.querySelectorAll('.chooseRight');
const screenButton = document.querySelector('.screenButton');



chooseLeft.forEach(sel => {

  sel.addEventListener('click', () => {
    // Deselect all boxes
    chooseLeft.forEach(sel => {
      sel.classList.remove('selected');
    });

    // Select the clicked box
    sel.classList.add('selected');
    checkSelected();
  });
});

chooseRight.forEach(sel => {

  sel.addEventListener('click', () => {
    // Deselect all boxes
    chooseRight.forEach(sel => {
      sel.classList.remove('selected');
      
    });

    // Select the clicked box
    sel.classList.add('selected');
    checkSelected();
  });
});

screenButton.addEventListener('click', () =>{
  const allSelected = document.querySelectorAll('.selected');
  if(allSelected.length === 2){
    
    console.log("ready for game");
    const gameBoard = document.querySelector('.gameBoard');
    gameBoard.style.display = 'grid';
    const arr = establishPlayers();
    render(arr);

    const screen = document.querySelector('.startScreen');
    screen.style.display = 'none';
  }
});

function establishPlayers(){

  const selectedOptions = document.querySelectorAll('.selected');

  
    
    const computedStyleFirst = getComputedStyle(selectedOptions[0]);
    const playerOne = createPlayer(selectedOptions[0].textContent,computedStyleFirst.color);

    const computedStyleSecond = getComputedStyle(selectedOptions[1]);
    const playerTwo = createPlayer(selectedOptions[1].textContent,computedStyleSecond.color);

  
    const arr =[];
    arr.push(playerOne);
    arr.push(playerTwo);
    return arr;
}



function checkSelected(){


}



function render(arr){

    displayALL(arr);
    
}




//first screen pick player name using form color is already set, the color
//will be for the x an o

//when submit, remove screen and play game

//have left be it own things.
//if i select one the other 