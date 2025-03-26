


//opslaan van gender of naam!! hoe zorg ik ervoor dat de gender of naam ook wordt opgeslagen buiten de functie??


let gender = "";  //moet worden: she/he/they
let crush = "";    //moet worden: naam v crush
let subject = "They";

const buttonStart = document.querySelector(".start-btn");
const buttonFem = document.querySelector(".female-btn");
const buttonMale = document.querySelector(".male-btn");
const buttonOth = document.querySelector(".other-btn");

buttonStart.addEventListener("click", () => {
    crush = document.querySelector(".name-input").value;
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
    if (crush || gender) { // wordt alleen overschrijven als een van de twee een waarde heeft
        subject = crush ? crush : gender; // als er een crush is, gebruik die, anders gebruik gender
    }  
}

//aangeklikte button krijgt styling

const genderButtons = document.querySelectorAll(".gender-buttons button");

genderButtons.forEach(genderButton => {
    genderButton.addEventListener("click", () => {
        genderButtons.forEach(btn => {
            btn.style.color = ""; 
        });

        genderButton.style.color = "white";
      });
});



//spel

const pedals = document.querySelectorAll("#pedal");
const message = document.querySelector(".message-block");
const endResult = document.querySelector(".end-message");
const overlayStart = document.querySelectorAll('.overlay')[0];
const overlayEnd = document.querySelectorAll('.overlay')[1];


let result = Math.random() < 0.5; //als kleiner is dan 0,5 is true en als groter is is false!
let timer = 4; //aantal bladeren


overlayEnd.style.display = "none";

// start van het spel!!
buttonStart.addEventListener('click', () => {
  overlayStart.style.display = "none";
  overlayEnd.style.display = "none";
});



//spelverloop pedals

pedals.forEach((pedal) => {
    pedal.addEventListener("click", () => {
        pedal.classList.add("fall");

        result = !result;

        if (result === true) {
            message.innerHTML = `<p style="color:#689F38;">${subject} loves me<br>🥰</p>`;
            timer--;
        } else {
            message.innerHTML = `<p style="color:#EB4F26;">${subject} loves me not<br>😭</p>`;
            timer--;
        };

        if (timer === 0 && result === true) {
            overlayEnd.style.display = "flex";
            endResult.innerHTML = `<h2 style="color:#689F38;">🥰<br>${subject} loves you!</h2>`;
        }
        if (timer === 0 && result === false) {
            overlayEnd.style.display = "flex";
            endResult.innerHTML = `<h2 style="color:#EB4F26;">😭<br>${subject} loves you not!</h2>`;
        }


        //als subject they is... (uitzondering = "love zonder s")

        if (subject === "They") {
            if (result === true) {
                message.innerHTML = `<p style="color:#689F38;">${subject} love me<br>🥰</p>`;
            } else {
                message.innerHTML = `<p style="color:#EB4F26;">${subject} love me not<br>😭</p>`;
            };
    
            if (timer === 0 && result === true) {
                overlayEnd.style.display = "flex";
                endResult.innerHTML = `<h2 style="color:#689F38;">🥰<br>${subject} love you!</h2>`;
            }
            if (timer === 0 && result === false) {
                overlayEnd.style.display = "flex";
                endResult.innerHTML = `<h2 style="color:#EB4F26;">😭<br>${subject} love you not!</h2>`;
            }

        };
        
    });
})


// spel opnieuw starten

const buttonReset = document.querySelector(".end-btn");

buttonReset.addEventListener("click", restartGame);

function restartGame() {
    overlayStart.style.display = "flex";
    overlayEnd.style.display = "none";

    pedals.forEach((pedal) => {
        pedal.classList.remove("fall");
    });

    message.innerHTML = `<p>Do they?<br>Click a pedal to find out! <br>😇</p>`;

    result = Math.random() < 0.5; 
    timer = 4;
};