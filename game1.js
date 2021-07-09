function rpsGame(yourchoice){
    var yourchoice;
    yourchoice=yourchoice.id;
    console.log(yourchoice);


    var botchoice=computerChoice(createRandom_No());
    console.log(botchoice);


    var winner=decideWinner(yourchoice,botchoice);
    console.log(winner);

    const Message=finalMessage(winner);
    console.log(Message);

    const result=rpsfrontEnd(yourchoice,botchoice,Message);
    console.log(result);

}

function createRandom_No(){
    return (Math.floor(Math.random()*3));
}

function computerChoice(number){
    const arr=['rock','paper','scissor'];
    return arr[number];
}

function decideWinner(yourchoice,botchoice){
    var rpsDatabase={
        'rock':{'rock':0.5 ,'paper':0,'scissor':1},
        'paper':{'rock':1 ,'paper':0.5,'scissor':0},
        'scissor':{'rock':0 ,'paper':1,'scissor':0.5},
    };
    const yourScore=rpsDatabase[yourchoice][botchoice];
    const botScore=rpsDatabase[botchoice][yourchoice];
    console.log(` Your score is ${yourScore}`);
    console.log(` Bot score is ${botScore}`);
    return[yourScore,botScore];
   
}

function finalMessage([yourScore, botScore]){
    if(yourScore==0){
        return{'message': "You lost!", 'color':'blue'};
    }
    else if(yourScore==0.5){
        return{'message': "You Tied!", 'color':'red'};
    }
    else{
        return{'message': "You Won!", 'color':'green'};
    }

    
}


function rpsfrontEnd(humanImagechoice, botImagechoice,finalMessage){
    var imgDatabase={
        'rock': document.getElementById('rock').src ,
        'paper': document.getElementById('paper').src ,
        'scissor': document.getElementById('scissor').src ,
    };


    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var humDiv= document.createElement('div');
    var botDiv= document.createElement('div');
    var msgDiv= document.createElement('div');

    humDiv.innerHTML= `<img src= ${imgDatabase[humanImagechoice]} height=150; width:150;  style: ' box-shadow: 0px 10px 50px blue;'   + >`;
    msgDiv.innerHTML="<h1 style= 'color:"+ finalMessage['color'] + "; font-size=60px ; padding:20px '>"+ finalMessage['message'] + "</h1>"
    botDiv.innerHTML= `<img src= ${imgDatabase[botImagechoice]} height=150; width:150;  style: ' box-shadow: 0px 10px 50px red;'   + >`;

    document.getElementById('flex-box').appendChild(humDiv);
    document.getElementById('flex-box').appendChild(msgDiv);
    document.getElementById('flex-box').appendChild(botDiv);
    
}