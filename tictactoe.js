let player="X";
let gameEnded=0;
function checkwin(box1,box2,box3,box4,box5,box6,box7,box8,box9,boxid,turn)
{
    if(boxid.value==="" && player==="X" && gameEnded==0)
        { boxid.value="X";
         turn.innerHTML="Player O turn";
         player="O";
         
        }
        if(boxid.value==="" && player==="O" && gameEnded==0)
         {
             boxid.value="O";
             turn.innerHTML="Player X turn";
             player="X";
             
         }
         if(box1.value!==""&&box2.value!==""&&box3.value!==""&&box4.value!==""&&box5.value!==""&&box6.value!==""&&box7.value!==""&&box8.value!==""&&box9.value!=="" 
            && gameEnded==0)
             {
                 turn.innerHTML="Match tied!!!";
                 gameEnded=1;
             }
         
    if(box1.value==="X" && box2.value==="X" && box3.value==="X")
        {
            gameEnded=1;
            turn.innerHTML="X wins!!!!";
            box1.style.backgroundColor="green";
            box2.style.backgroundColor="green";
            box3.style.backgroundColor="green";
        }
    if(box4.value==="X" && box5.value==="X" && box6.value==="X")
        {
            gameEnded=1;
            turn.innerHTML="X wins!!!!";
            box4.style.backgroundColor="green"; box5.style.backgroundColor="green"; box6.style.backgroundColor="green";
        }
    if(box7.value==="X" && box8.value==="X" && box9.value==="X")
        {
            gameEnded=1;
            turn.innerHTML="X wins!!!!";
            box7.style.backgroundColor="green"; box8.style.backgroundColor="green"; box9.style.backgroundColor="green";
        }
    if(box1.value==="X" && box5.value==="X" && box9.value==="X")
        {
            gameEnded=1;
            turn.innerHTML="X wins!!!!";
            box1.style.backgroundColor="green"; box5.style.backgroundColor="green"; box9.style.backgroundColor="green";
        }
    if(box3.value==="X" && box5.value==="X" && box7.value==="X")
        {
            gameEnded=1;
            turn.innerHTML="X wins!!!!";
            box3.style.backgroundColor="green"; box5.style.backgroundColor="green"; box7.style.backgroundColor="green";
        }
    if(box1.value==="X" && box4.value==="X" && box7.value==="X")
        {
            gameEnded=1;
            turn.innerHTML="X wins!!!!";
            box1.style.backgroundColor="green"; box4.style.backgroundColor="green"; box7.style.backgroundColor="green";
        }
    if(box3.value==="X" && box6.value==="X" && box9.value==="X")
        {
            gameEnded=1;
            turn.innerHTML="X wins!!!!";
            box3.style.backgroundColor="green"; box6.style.backgroundColor="green"; box9.style.backgroundColor="green";
        }
    if(box2.value==="X" && box5.value==="X" && box8.value==="X")
        {
            gameEnded=1;
            turn.innerHTML="X wins!!!!";
            box2.style.backgroundColor="green"; box5.style.backgroundColor="green"; box8.style.backgroundColor="green";
        }
        if(box1.value==="O" && box2.value==="O" && box3.value==="O")
            {
                gameEnded=1;
                turn.innerHTML="O wins!!!!";
                box1.style.backgroundColor="green";box2.style.backgroundColor="green";box3.style.backgroundColor="green";
            }
        if(box4.value==="O" && box5.value==="O" && box6.value==="O")
            {
                gameEnded=1;
                turn.innerHTML="O wins!!!!";
                box4.style.backgroundColor="green"; box5.style.backgroundColor="green"; box6.style.backgroundColor="green";
            }
        if(box7.value==="O" && box8.value==="O" && box9.value==="O")
            {
                gameEnded=1;
                turn.innerHTML="O wins!!!!";
                box7.style.backgroundColor="green"; box8.style.backgroundColor="green"; box9.style.backgroundColor="green";
            }
        if(box1.value==="O" && box5.value==="O" && box9.value==="O")
            {
                gameEnded=1;
                turn.innerHTML="O wins!!!!";
                box1.style.backgroundColor="green"; box5.style.backgroundColor="green"; box9.style.backgroundColor="green";
            }
        if(box3.value==="O" && box5.value==="O" && box7.value==="O")
            {
                gameEnded=1;
                turn.innerHTML="O wins!!!!";
                box3.style.backgroundColor="green"; box5.style.backgroundColor="green"; box7.style.backgroundColor="green";
            }
        if(box1.value==="O" && box4.value==="O" && box7.value==="O")
            {
                gameEnded=1;
                turn.innerHTML="O wins!!!!";
                box1.style.backgroundColor="green"; box4.style.backgroundColor="green"; box7.style.backgroundColor="green";
            }
        if(box3.value==="O" && box6.value==="O" && box9.value==="O")
            {
                gameEnded=1;
                turn.innerHTML="O wins!!!!";
                box3.style.backgroundColor="green"; box6.style.backgroundColor="green"; box9.style.backgroundColor="green";
            }
        if(box2.value==="O" && box5.value==="O" && box8.value==="O")
            {
                gameEnded=1;
                turn.innerHTML="O wins!!!!";
                box2.style.backgroundColor="green"; box5.style.backgroundColor="green"; box8.style.backgroundColor="green";
            }                   
}
function dorestart(box1,box2,box3,box4,box5,box6,box7,box8,box9,turn)
{
    box1.value="";
    box2.value="";
    box3.value="";
    box4.value="";
    box5.value="";
    box6.value="";
    box7.value="";
    box8.value="";
    box9.value="";
    gameEnded=0;
    turn.innerHTML="Player X turn";
    player="X";
    box1.style.backgroundColor="chocolate";
    box2.style.backgroundColor="chocolate";
    box3.style.backgroundColor="chocolate";
    box4.style.backgroundColor="chocolate";
    box5.style.backgroundColor="chocolate";
    box6.style.backgroundColor="chocolate";
    box7.style.backgroundColor="chocolate";
    box8.style.backgroundColor="chocolate";
    box9.style.backgroundColor="chocolate";
    
}