function AutoPlay(){}
AutoPlay.prototype.run = function(player) {
    if(!player.muted){
    player.mute();
    }
    player.avanza();
};

export default AutoPlay;