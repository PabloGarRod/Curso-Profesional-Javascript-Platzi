function MediaPlayer(configuracion){
    this.miVideo = configuracion.parametro;
    this.plugins = configuracion.plugins || [];

    this._initPlugins();
  }

  MediaPlayer.prototype._initPlugins = function(){
    const player = {
      play: ()=> this.avanza(),
      pause: ()=> this.para(),
      media: this.miVideo,
      get muted(){
        return this.miVideo.muted;
      },

      set muted(value){
        this.miVideo.muted = value;
      },
    }


    this.plugins.forEach(plugin => {
        plugin.run(this);
    });
  };
  
  MediaPlayer.prototype.avanza = function(){
    this.miVideo.play();
  };
  
  MediaPlayer.prototype.para = function(){
    this.miVideo.pause();
  };
  
  MediaPlayer.prototype.botonPlay = function(){
    if(this.miVideo.paused){
      this.avanza();
    }else{
      this.para();
    }
  };

MediaPlayer.prototype.mute = function() {
  this.miVideo.muted = true;
};

MediaPlayer.prototype.unmute = function() {
  this.miVideo.muted = false;
};

MediaPlayer.prototype.botonMute = function(){
  if(this.miVideo.muted){
    this.unmute();
  }else{
    this.mute();
  }
}

export default MediaPlayer;  