const clickHere = document.querySelector(".password");
const nessie = document.querySelector(".nessie-box");

    clickHere.addEventListener("click", () => {
        var name = prompt("What is your full name?");
        var question = prompt("Awtism?");
        var cat = prompt("What is my cats name?");

        if(name.toLowerCase() == "Marshall Dunn" && question.toLowerCase() == "nessie" && cat.toLowerCase() == "justice"){
            alert("You have unlocked spectial mode");
            nessie.classList.toggle("open");
            document.body.classList.add('rainbow');

            const soundId = clickHere.dataset.sound;
            const audio = document.getElementById(soundId);
            audio.currentTime = 0; // restart sound
            audio.play();
        }
        else{
            alert("nope");
        }
    });