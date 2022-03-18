var audio = document.getElementById("audio");
var btn1 = document.getElementById("btn1");

let count  = 0;

function playaudio() {
    if(count === 0){
        audio.play();
        btn1.innerText = "Pause";
        count = 1;
        
    }else if(count===1){
        audio.pause();
        btn1.innerText = "Play";
        count = 0;

    }
    
}

function resetaudio() {
    audio.currentTime = 0;
}