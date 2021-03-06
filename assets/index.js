import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.js'

const video = document.querySelector("video");
const reproductor = new MediaPlayer({
  parametro: video, 
  plugins: [
    new AutoPlay(), new AutoPause()
  ]
});

const buttonPlay = document.getElementById('play');
const buttonMute = document.getElementById('mute');
buttonPlay.onclick = () => reproductor.botonPlay();
buttonMute.onclick = () => reproductor.botonMute();

if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/sw.js').catch(error =>{
    console.log(error.message)
  })
}