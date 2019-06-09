var userscore=0;
var computerscore=0;
const userscore_span=document.getElementById("user_score");
const computerscore_span=document.getElementById("computer_score");
const scoreboard_div=document.getElementById("scoreboard");
var result_div=document.querySelector(".result");
const rock_div=document.getElementById("r");
const scissor_div=document.getElementById("s");
const paper_div=document.getElementById("p");
var pp=document.getElementById("para");
var res=document.getElementById("action_message");
res.animate([
    { transform: 'scale(1)', background: 'red', opacity: 1},
    { transform: 'scale(0.7) rotate(0deg)', background: 'blue', opacity: .5},
    {transform:'scale(1.5) rotate(10deg)' ,opacity:0.5,background:'orange'},
//   { transform: 'scale(3) rotate(0deg)', background: 'green', opacity: 1, offset: 1 },
], {

    duration: 2000, //milliseconds
//easing: 'ease-in-out', //'linear', a bezier curve, etc.
delay: 0, //milliseconds
iterations: Infinity, //or a number
direction: 'alternate', //'normal', 'reverse', etc.
// fill: 'forwards' //'backwards', 'both', 'none', 'auto'
}
    );
function getcomputerchoices()
{
    const choices=["r","p","s"];
    var randomchoice=Math.floor(Math.random()*3);
    return choices[randomchoice];
}
rock_div.addEventListener("click",function()
{
 func("r");
});
paper_div.addEventListener("click",function()
{
    func("p");
});
scissor_div.addEventListener("click",function()
{
    func("s");
});
function func(userchoice)
{
    var returnrandomchoice=getcomputerchoices();
    console.log(returnrandomchoice);
    if((userchoice=="p")&&(returnrandomchoice=="r"))
    {
        userscore+=1;
        userscore_span.innerHTML=userscore;
        pp.innerHTML="Paper cover Rock,You win !";
    }
   else if((userchoice=="r")&&(returnrandomchoice=="s"))
    {
        userscore+=1;
        userscore_span.innerHTML=userscore;
        pp.innerHTML="Rock distroy Scissors,You Win !";
    }
    else if((userchoice=="s")&&(returnrandomchoice=="p"))
    {
        userscore+=1;
        userscore_span.innerHTML=userscore;
        pp.innerHTML="Scissors Cut Paper,You Win !";
    }
    else if((userchoice=="r")&&(returnrandomchoice=="p"))
    {
        computerscore+=1;
        computerscore_span.innerHTML=computerscore;
        pp.innerHTML="Papers(computer) Covers Rock(user),You Loose !";
    }
    else if((userchoice=="p")&&(returnrandomchoice=="s"))
    {
        computerscore+=1;
        computerscore_span.innerHTML=computerscore;
        pp.innerHTML="Scissors(computer) Cut Papers(user),You Loose !";
    }
    else if((userchoice=="r")&&(returnrandomchoice=="r"))
    {
        pp.innerHTML="It's a Tie";
    }
    else if((userchoice=="s")&&(returnrandomchoice=="s"))
    {
        pp.innerHTML="It's a Tie";
    }
    else if((userchoice=="p")&&(returnrandomchoice=="p"))
    {
        pp.innerHTML="It's a Tie";
    }
    else
    {
        computerscore+=1;
        computerscore_span.innerHTML=computerscore;
        pp.innerHTML="Rock(computer) Distroy Scissors(user),You Loose !";
    }
    if(userscore==5)
    {
        res.innerHTML="User Won";
        res.animate([
            { transform: 'scale(1)', background: 'red', opacity: 1},
            { transform: 'scale(0.5) rotate(270deg)', background: 'blue', opacity: .5},
            {transform:'scale(1.5) rotate(30deg)' ,opacity:0.5,background:'orange'},
 //   { transform: 'scale(3) rotate(0deg)', background: 'green', opacity: 1, offset: 1 },
  ], {
        
            duration: 2000, //milliseconds
    //easing: 'ease-in-out', //'linear', a bezier curve, etc.
    delay: 0, //milliseconds
    iterations: Infinity, //or a number
    direction: 'alternate', //'normal', 'reverse', etc.
   // fill: 'forwards' //'backwards', 'both', 'none', 'auto'
        }
            );
    }
    else if(computerscore==5)
    {
        res.innerHTML="Computer Won";
        res.animate([
            { transform: 'scale(1)', background: 'red', opacity: 1},
            { transform: 'scale(0.5) rotate(270deg)', background: 'blue', opacity: .5},
            {transform:'scale(1.5) rotate(30deg)' ,opacity:0.5,background:'orange'},
 //   { transform: 'scale(3) rotate(0deg)', background: 'green', opacity: 1, offset: 1 },
  ], {
        
            duration: 2000, //milliseconds
    //easing: 'ease-in-out', //'linear', a bezier curve, etc.
    delay: 0, //milliseconds
    iterations: Infinity, //or a number
    direction: 'alternate', //'normal', 'reverse', etc.
   // fill: 'forwards' //'backwards', 'both', 'none', 'auto'
        }
            );
        
    }
}