const play = document.querySelector('.play ');
const prev = document.querySelector('.play-prev ');
const next = document.querySelector('.play-next');
const playListBlock = document.querySelector('.play-list');



const playList = ['Aqua Caelestis.mp3', 'Ennio Morricone.mp3','River Flows In You.mp3','Summer Wind.mp3'];


let PlayListIndex = 0; 

const audio = new Audio();
audio.src = `../assets/sounds/${playList[PlayListIndex]}`;

export function PlayOrPauseAudio() {
    if(audio.paused) {
        audio.play();
        play.classList.add('pause');
        
    }else { 
        audio.pause();
        play.classList.remove('pause');}
    
  
    
}



function playNext() {
    if (PlayListIndex >= 3) {
        PlayListIndex = 0;
        audio.src = `../assets/sounds/${playList[PlayListIndex]}`;
        audio.load();
        audio.play();
    }else {
        PlayListIndex++;
        audio.src = `../assets/sounds/${playList[PlayListIndex]}`;
        audio.load();
        audio.play();
        play.classList.add('pause');
    }
   
    
}

function playPrev() {
  
    if (PlayListIndex <= 0 ) {
        PlayListIndex = 3;
        audio.src = `../assets/sounds/${playList[PlayListIndex]}`;
        audio.load();
        audio.play();
    }else {
        PlayListIndex--;
        audio.src = `../assets/sounds/${playList[PlayListIndex]}`;
        console.log(PlayListIndex);
        audio.load();
        audio.play();
        play.classList.add('pause');
    }
}


function createPlayListLement() {
    for(let i = 0; i < playList.length; i++) {
        const element = document.createElement('i');
        element.textContent = playList[i];
        element.classList.add('play-item');
        playListBlock.appendChild(element);
        element.addEventListener('click', (e) => {
                audio.src = `../../assets/sounds/${playList[i]}`;
                play.classList.add('pause');
                audio.load();
                audio.play();
        }   );
    }
   
   

}


 
  


play.addEventListener('click', PlayOrPauseAudio);
next.addEventListener('click', playNext);
prev.addEventListener('click', playPrev);


createPlayListLement();