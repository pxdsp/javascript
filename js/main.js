//opslaan van gender of naam!! hoe zorg ik ervoor dat de gender of naam ook wordt opgeslagen buiten de functie??


let gender = "";  //moet worden: she/he/they
let crush = "";    //moet worden: naam v crush
let subject = "";
let result = false;

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
    subject = crush ? crush : gender;  // als er een crush is, gebruik die, anders gebruik gender
    console.log(subject)
}

//aangeklikte button krijgt styling

const genderButtons = document.querySelectorAll(".gender-buttons button");

genderButtons.forEach(genderButton => {
    genderButton.addEventListener("click", () => {
        genderButtons.forEach(btn => btn.style.border = "none");
        button.style.border = "2px solid black";
    });
});


// start van het spel!!

const overlay = document.querySelector('.overlay');
 
buttonStart.addEventListener('click', () => {
  overlay.classList.add("invisible");
});


//spelverloop pedals


const pedals = document.querySelectorAll("#pedal");
const message = document.querySelector(".message-block");


pedals.forEach((pedal) => {
    pedal.addEventListener("click", () => {
        pedal.classList.add("fall");

        result = !result;

        message.textContent = `test ${subject} `;
    })
})