//const buttonsArray = document.querySelectorAll('button.drum');
//buttonsArray.forEach((b) => b.addEventListener('click', playSound));

document.addEventListener('keydown', playSound);

function playSound(event) {
    const soundsObject = {
        w: 'crash',
        a: 'kick-bass',
        s: 'snare',
        d: 'tom-1',
        j: 'tom-2',
        k: 'tom-3',
        l: 'tom-4',
    }

    const letter = event.key;

    if (soundsObject.hasOwnProperty(letter)) {
        const mySound = new Audio(`./sounds/${soundsObject[letter]}.mp3`);
        
        const pressedButton = document.querySelector('button.' + letter);
        pressedButton.classList.add('pressed');
        
        mySound.play();
        
        setTimeout(() => {
            pressedButton.classList.remove('pressed');
        }, 60);
    }
}

