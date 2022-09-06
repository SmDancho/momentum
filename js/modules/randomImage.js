const url = 'https://picsum.photos/1920/1080';

const body = document.querySelector('body');
const btnPrev = document.querySelector('.slide-prev');
const btnNext = document.querySelector('.slide-next');


export async function getImg() {

    const get = await fetch(url);

  
    function replaceImg() {
       
        const Img = get.url;
      
        document.body.style.backgroundImage = `url(${Img})`;
      
       
        
    }
    replaceImg() ;
    
}

export function Slider() {
    btnPrev.addEventListener('click', () => { 
        getImg();
    } );
    btnNext.addEventListener('click', () => {
        getImg();
    } );
    

}


