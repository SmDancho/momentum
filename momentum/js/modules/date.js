const time = document.querySelector('.time');
const dateDigit = document.querySelector('.date');
const weekday= ['Sunday', 'Monday', 'Tuesday', 'Wensday', 'Thursday', 'Friday', 'Saturday'];

export function getTime() {

    let hours = new Date().toLocaleTimeString("ru-RU").split('/:| /');
    time.innerHTML = hours ;
 
}
export function getDate() {
    let date = new Date();
    let longMonth = date.toLocaleString('en-en', { month: 'long' });
    let getWeekDay = date.getDay(); // get index for weekday 

    
    dateDigit.innerHTML = `${weekday[getWeekDay]} : ${longMonth} ${date.getDate()} `;
    
    

}

