
import Player from '@vimeo/player';
import throttle from 'lodash.throttle'

const player = new Player('vimeo-player');
 
const onPlay = function({seconds}) {
    localStorage.setItem("videoplayer-current-time",seconds );
};
let throt_fun = throttle(onPlay, 1000);


player.on('timeupdate', throt_fun);

const getTime = localStorage.getItem("videoplayer-current-time");
if (getTime) {
    player.setCurrentTime(getTime);
}


 