let hr = 00;
let min = 00;
let sec = 00;
let timer = null;
function startTimer() {
    if(timer!==null){
        clearInterval('timer');
    }
    timer = setInterval(stopwatch,10);
}

function stop(){
    clearInterval(timer);
}
function reset(){
    clearInterval(timer);
    hr = 00;
    min = 00;
    sec = 00;
    document.getElementById('watch').innerHTML="00 Hr : 00 Min : 00 Sec";

}



function stopwatch(){
    sec++;
    if(sec==60){
        sec=0;
        min++;
        if(min==60){
            min=0;
            hr++;
            
        }

    }
    document.getElementById('watch').innerHTML = hr +" Hr :"+min+" Min :"+sec+"Sec";
    document.getElementById('hr').innerHTML=hr;
    document.getElementById('min').innerHTML=min;
    document.getElementById('sec').innerHTML= sec;
    
}




