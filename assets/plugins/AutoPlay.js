function AutoPlay(){};
AutoPlay.prototype.run = function(player) {
    player.mute();
    player.avanza();
};

export default AutoPlay;