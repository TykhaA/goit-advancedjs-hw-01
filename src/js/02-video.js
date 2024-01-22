
import Player from '@vimeo/player';
import throttle from 'lodash.throttle'

const player = new Player('vimeo-player');
 
const onPlay = function(data) {
    const currentTime = data;
    localStorage.setItem("videoplayer-current-time", JSON.stringify(currentTime));
};
let throt_fun = throttle(onPlay, 1000);


player.on('timeupdate', throt_fun);

const getTime = JSON.parse(localStorage.getItem("videoplayer-current-time"));
if (getTime) {
    player.setCurrentTime(getTime.seconds);
}


 