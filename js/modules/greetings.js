

const greetBlock = document.querySelector(".greeting");
const nameInput = document.querySelector(".name");


export function setName() {
    nameInput.addEventListener("change", () => { 
        localStorage.setItem("username", nameInput.value);
        
    });
   
    nameInput.value =  localStorage.getItem("username");
 
   
}


 


export function greetings() {

    let hours = new Date();

    if(hours.getHours()>= 6 && hours.getHours()  <= 12) {
        greetBlock.innerHTML = " Good morning :";
    } else if (hours.getHours() >= 12 && hours.getHours()  <= 17) {
        greetBlock.innerHTML = " Good afternoon :";
    } else if (hours.getHours()>= 18 && hours.getHours()  <= 24) {
        greetBlock.innerHTML = " Good evening: ";
    }else {greetBlock.innerHTML = " Good night :";}
    
}
