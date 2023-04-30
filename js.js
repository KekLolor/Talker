const textarea = document.querySelector("textarea");
const button = document.querySelector("button");
let isSpeaking = true;

const textToSpeech = () => {
    const synth = window.speechSynthesis;
    const text = textarea.value;

    if (!synth.speaking && text) {
        const utterance = new SpeechSynthesisUtterance(text);
        synth.speak(utterance);
    }

    if (text.length > 50) {
        if (synth.speaking && isSpeaking) {
            button.innerText = "Пауза";
            synth.resume();
            isSpeaking = false;
        } else {
            buttom.innerText = "Продолжить"
            synth.pause();
            isSpeaking = true;
        }
    } else {
        isSpeaking = "false";
        button.innerHTML = "Озвучить"
    }

    setInterval(() => {
        if (!synth.speaking && !isSpeaking) {
            isSpeaking = true;
            button.innerText = "Преоброзовать в речь";
        }
    })
}

button.addEventListener("click", textToSpeech);
