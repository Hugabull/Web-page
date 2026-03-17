const clickHere = document.querySelector(".password");
const nessie = document.querySelector(".nessie-box");

    clickHere.addEventListener("click", () => {
        var name = prompt("What is your full name?");
        var question = prompt("Who is our mutual friend?");
        var cat = prompt("What is my cats name?");

        if(name.toLowerCase() == "marshall dunn" && question.toLowerCase() == "nessie" && cat.toLowerCase() == "justice"){
            alert("You have unlocked spectial mode");
            alert("this is a reminder that I really really really like you and I am so happy to have you in my life, you are so pretty and so amazing and I like you so fucking much");
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