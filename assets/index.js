import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector("video");
const reproductor = new MediaPlayer({
  parametro: video, 
  plugins: [
    //new AutoPlay()
  ]
});

const buttonPlay = document.getElementById('play');
const buttonMute = document.getElementById('mute');
buttonPlay.onclick = () => reproductor.botonPlay();
buttonMute.onclick = () => reproductor.botonMute();