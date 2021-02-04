import sound from "./audio/ding.mp3";

//Play notification ding when alarm finishes
function playAudio() {
  const audio = new Audio(sound);
  audio.volume = 0.3;
  audio.play();
}

export default playAudio;
