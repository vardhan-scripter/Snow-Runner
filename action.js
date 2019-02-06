var RunwayBeginning=0 ,RunwayEnd=40000,SnowMan1Center=Math.floor(Math.random() * 800) + 400,SnowMan2Center=SnowMan1Center+Math.floor(Math.random() * 400) + 200,JumpingHeight=0,BallHoriZontal=300,BallVertical=293,TopCounter=0,BottomCounter=0,KeyController=1,ScoreCard=0,StartingStatus=0,LimiterForSnowMan1=SnowMan1Center,LimiterForSnowMan2=SnowMan2Center,MoonPosition=Math.floor(Math.random() * 1000) + 200,anchor1=20,anchor2=620,anchor3=1000;
window.onload = function() {
    filler();
    document.getElementById('ScoreCard').innerHTML='ScoreCard: '+ScoreCard;
}
function snowrunner() {
    
    run();
}
    function run() {
        
    exe2=setInterval(function() {
        RunwayBeginning=RunwayBeginning-5;
        RunwayEnd=RunwayEnd-5;
        if(SnowMan1Center<=0&&RunwayEnd>=LimiterForSnowMan1){
        SnowMan1Center=Math.floor(Math.random() * 1000) + 900; 
        LimiterForSnowMan1=SnowMan1Center;
    }
        if(SnowMan2Center<=0&&RunwayEnd>=LimiterForSnowMan2){
        SnowMan2Center=SnowMan1Center+Math.floor(Math.random() * 400) + 200; 
        LimiterForSnowMan2=SnowMan2Center;
    }
        else
        SnowMan1Center=SnowMan1Center-5;
        SnowMan2Center=SnowMan2Center-5;
        filler();
    ScoreCard=ScoreCard+1;
    document.getElementById('ScoreCard').innerHTML='ScoreCard: '+ScoreCard;


    if (Math.abs(SnowMan1Center-BallHoriZontal) <= 10 && Math.abs(SnowMan1Center-BallVertical) <= 10) {
        exe2 = clearTimeout(exe2);
        document.getElementById('output').innerHTML='game over';
        
    }
    if(Math.abs(SnowMan2Center-BallHoriZontal) <= 10 && Math.abs(SnowMan2Center-BallVertical) <= 10){
        exe2 = clearTimeout(exe2);
        document.getElementById('output').innerHTML='game over';
        
    }
    if (Math.abs(RunwayEnd-BallHoriZontal)<=20) {
        exe2 = clearTimeout(exe2);
        document.getElementById('output').innerHTML='you won the game';
    }


    if(anchor1>=-210){
        anchor1=anchor1-5;
    }
    else
        anchor1=1300;

    if(anchor2>=-210){
        anchor2=anchor2-5;
    }
    else
        anchor2=1300;

    if(anchor3>=-210){
        anchor3=anchor3-5;
    }
    else
        anchor3=1300;


    }, 20);
}


function downrun() {
    KeyController=0;

        exe2 = clearTimeout(exe2);
           exe1= setInterval(function() {
        RunwayBeginning=RunwayBeginning-5;
        RunwayEnd=RunwayEnd-5;
        if(SnowMan1Center<=0&&RunwayEnd>=LimiterForSnowMan1){
        SnowMan1Center=Math.floor(Math.random() * 1000) + 900; 
        LimiterForSnowMan1=SnowMan1Center;
    }
    else
        SnowMan1Center=SnowMan1Center-5;
        if(SnowMan2Center<=0&&RunwayEnd>=LimiterForSnowMan2){
        SnowMan2Center=SnowMan1Center+Math.floor(Math.random() * 400) + 200; 
        LimiterForSnowMan2=SnowMan2Center;
    }
        else
        SnowMan2Center=SnowMan2Center-5;

        if(TopCounter<16){
        BallVertical=BallVertical-9;
        TopCounter=TopCounter+1;
    }
        else if(BottomCounter<16){
        BallVertical=BallVertical+9;
        BottomCounter=BottomCounter+1;
    }
    else
        BallVertical=BallVertical;
        filler();
    JumpingHeight=JumpingHeight+1;
    ScoreCard=ScoreCard+1;
    document.getElementById('ScoreCard').innerHTML='ScoreCard: '+ScoreCard;
    if(JumpingHeight==32){
        exe1 = clearTimeout(exe1);
        TopCounter=0;
        BottomCounter=0;
        run();
        KeyController=1;
        JumpingHeight=0;
    }
    
    if (Math.abs(SnowMan1Center-BallHoriZontal) <= 30 && Math.abs(280-BallVertical) <=30) {
        exe1 = clearTimeout(exe1);
        exe2 = clearTimeout(exe2);
        document.getElementById('output').innerHTML='game over';
        
    }
    if(Math.abs(SnowMan2Center-BallHoriZontal) <= 30 && Math.abs(280-BallVertical) <=30){
        exe1 = clearTimeout(exe1);
        exe2 = clearTimeout(exe2);
        document.getElementById('output').innerHTML='game over';
        
    }
    if (Math.abs(RunwayEnd-BallHoriZontal)<=30) {
        exe1 = clearTimeout(exe1);
        exe2 = clearTimeout(exe2);
        document.getElementById('output').innerHTML='you won the game';
    }

    if(anchor1>=-210)
        anchor1=anchor1-5;
    else
        anchor1=1300;

    if(anchor2>=-210)
        anchor2=anchor2-5;
    else
        anchor2=1300;

    if(anchor3>=-210){
        anchor3=anchor3-5;
    }
    else
        anchor3=1300;

    }, 20);

}

    function beginning() {
        if(StartingStatus==0){
            document.getElementById('button').style.display='none';
            StartingStatus=1;
            snowrunner();
        }
        else if (KeyController==1) {
            downrun();

        }
    }


    function restart() {
            location.reload(); 
    
    }


    function filler() {
        var canvas = document.getElementById('canvas');
    var draw = canvas.getContext("2d");
    draw.fillStyle = "black";
    draw.fillRect(0, 0, 1300, 500);
    draw.lineWidth = 3;
    draw.beginPath();
    draw.moveTo(RunwayBeginning, 300);
    draw.lineTo(RunwayEnd+600, 300);
    draw.strokeStyle = "white";
    draw.stroke();


    draw.beginPath();
    draw.arc(MoonPosition,40, 40, 0, 2 * Math.PI);
    draw.fillStyle = "white";
    draw.fill();


    draw.beginPath();
    draw.lineWidth = 1;
    draw.fillStyle = "green";
    draw.moveTo(anchor1, 260);
    draw.lineTo(anchor1+10, 200);
    draw.lineTo(anchor1+12, 225);
    draw.lineTo(anchor1+20, 160);
    draw.lineTo(anchor1+22, 185);
    draw.lineTo(anchor1+40, 120);
    draw.lineTo(anchor1+42, 145);
    draw.lineTo(anchor1+60, 80);
    draw.lineTo(anchor1+62, 105);
    draw.lineTo(anchor1+80, 40);
    draw.lineTo(anchor1+82, 65);
    draw.lineTo(anchor1+100, 10);
    draw.lineTo(anchor1+120, 65);
    draw.lineTo(anchor1+122, 40);
    draw.lineTo(anchor1+140, 105);
    draw.lineTo(anchor1+142, 80);
    draw.lineTo(anchor1+160, 145);
    draw.lineTo(anchor1+162, 120);
    draw.lineTo(anchor1+180, 185);
    draw.lineTo(anchor1+182, 160);
    draw.lineTo(anchor1+200, 225);
    draw.lineTo(anchor1+202, 200);
    draw.lineTo(anchor1+210, 260);
    draw.fill();
    draw.stroke();

    draw.fillStyle = "chocolate";
    draw.fillRect(anchor1+90, 260, 30, 38);

    


    draw.beginPath();
    draw.fillStyle = "green";
    draw.moveTo(anchor2, 260);
    draw.lineTo(anchor2+10, 200);
    draw.lineTo(anchor2+12, 225);
    draw.lineTo(anchor2+20, 160);
    draw.lineTo(anchor2+22, 185);
    draw.lineTo(anchor2+40, 120);
    draw.lineTo(anchor2+42, 145);
    draw.lineTo(anchor2+60, 80);
    draw.lineTo(anchor2+62, 105);
    draw.lineTo(anchor2+80, 40);
    draw.lineTo(anchor2+82, 65);
    draw.lineTo(anchor2+100, 10);
    draw.lineTo(anchor2+120, 65);
    draw.lineTo(anchor2+122, 40);
    draw.lineTo(anchor2+140, 105);
    draw.lineTo(anchor2+142, 80);
    draw.lineTo(anchor2+160, 145);
    draw.lineTo(anchor2+162, 120);
    draw.lineTo(anchor2+180, 185);
    draw.lineTo(anchor2+182, 160);
    draw.lineTo(anchor2+200, 225);
    draw.lineTo(anchor2+202, 200);
    draw.lineTo(anchor2+210, 260);
    draw.fill();
    draw.stroke();

    draw.fillStyle = "chocolate";
    draw.fillRect(anchor2+90, 260, 30, 38);


    draw.beginPath();
    draw.fillStyle = "green";
    draw.moveTo(anchor3, 260);
    draw.lineTo(anchor3+10, 200);
    draw.lineTo(anchor3+12, 225);
    draw.lineTo(anchor3+20, 160);
    draw.lineTo(anchor3+22, 185);
    draw.lineTo(anchor3+40, 120);
    draw.lineTo(anchor3+42, 145);
    draw.lineTo(anchor3+60, 80);
    draw.lineTo(anchor3+62, 105);
    draw.lineTo(anchor3+80, 40);
    draw.lineTo(anchor3+82, 65);
    draw.lineTo(anchor3+100, 10);
    draw.lineTo(anchor3+120, 65);
    draw.lineTo(anchor3+122, 40);
    draw.lineTo(anchor3+140, 105);
    draw.lineTo(anchor3+142, 80);
    draw.lineTo(anchor3+160, 145);
    draw.lineTo(anchor3+162, 120);
    draw.lineTo(anchor3+180, 185);
    draw.lineTo(anchor3+182, 160);
    draw.lineTo(anchor3+200, 225);
    draw.lineTo(anchor3+202, 200);
    draw.lineTo(anchor3+210, 260);
    draw.fill();
    draw.stroke();

    draw.fillStyle = "chocolate";
    draw.fillRect(anchor3+90, 260, 30, 38);

    
    
    var snowman=document.getElementById('snowman');
    draw.drawImage(snowman,SnowMan1Center-18, 238,40,60);

    draw.drawImage(snowman,SnowMan2Center-18, 238,40,60);







    draw.fillStyle = "red";
    draw.fillRect(RunwayEnd-20, 220, 20, 80);
    var a=BallHoriZontal-48;
    var b=BallVertical+100;
    document.getElementById('image').style="position: absolute;top: "+b+"px;left: "+a+"px;";
    }

$(document).ready(function() {
    $(document).keydown(function(e) {
       beginning(); 
    });

});