import {getTime,getDate} from './modules/date.js';
import {greetings,setName} from './modules/greetings.js';
import {getImg,Slider} from './modules/randomImage.js';
import {getWeather} from './modules/weather.js';
import {randomQuotes} from './modules/randomQuates.js';
import {PlayOrPauseAudio} from './modules/audioPlayer.js';

setName();
setInterval(getTime, 0);
getDate();
greetings() ;
getImg();
Slider();
getWeather();
randomQuotes();


