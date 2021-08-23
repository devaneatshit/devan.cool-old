var audio = new Audio("wonder - bandits rmx w yun head.mp3");
  audio.volume = 0.2;
  audio.loop = true;
document.onclick = function() {
  audio.play();
}
