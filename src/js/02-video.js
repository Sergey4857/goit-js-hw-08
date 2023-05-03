import Vimeo from '@vimeo/player';
import _throttle from 'lodash.throttle';
// import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

player.on(
  'timeupdate',
  _throttle(function (data) {
    console.log(data.seconds);
    localStorage.setItem('videoplayer-current-time', data.seconds);
  }, 1000)
);

let currentTime = localStorage.getItem('videoplayer-current-time');

console.log(currentTime);

player.setCurrentTime(currentTime);
