//opslaan van gender of naam!! hoe zorg ik ervoor dat de gender of naam ook wordt opgeslagen buiten de functie??


let gender = "";  //moet worden: she/he/they
let crush = "";    //moet worden: naam v crush

const buttonStart = document.querySelector(".start-btn");
const buttonFem = document.querySelector(".female-btn");
const buttonMale = document.querySelector(".male-btn");
const buttonOth = document.querySelector(".other-btn");

buttonStart.addEventListener("click", () => {
    crush = document.querySelector(".name-input").value;
    console.log(crush);
    updateSubject();
});

buttonFem.addEventListener("click", () => {
    gender = "She";
    updateSubject();
});

buttonMale.addEventListener("click", () => {
    gender = "He";
    updateSubject();
});

buttonOth.addEventListener("click", () => {
    gender = "They";
    updateSubject();
});

function updateSubject() {
    const subject = crush ? crush : gender;  // als er een crush is, gebruik die, anders gebruik gender
    console.log(subject)
}


// start van het spel!!

const overlay = document.querySelector('.overlay');
 
buttonStart.addEventListener('click', () => {
  overlay.classList.add("invisible");
});


//spelverloop pedals

