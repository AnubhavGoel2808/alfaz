var button = document.getElementById("playpause");
var audio = document.getElementById("player");

button.addEventListener("click", function(){
    alert("dta");
  if(audio.paused){
    audio.play();
    button.innerHTML = "||";
  } else {
    audio.pause();
    button.innerHTML = "play";
  }
});