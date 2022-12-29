let button = document.querySelector('button.btn1');
button.addEventListener('click', dice);

function dice() {
    let num1 = Math.random() * 6;
    let num2 = Math.random() * 6;

    let pic1 = document.querySelector('img.img1');
    let pic2 = document.querySelector('img.img2');

    let artribute1 = './images/dice' + Math.ceil(num1) + '.png';
    let artribute2 = './images/dice' + Math.ceil(num2) + '.png';

    pic1.setAttribute('src', artribute1);
    pic2.setAttribute('src', artribute2);
    
    setTimeout(() => {
        if (Math.ceil(num1) > Math.ceil(num2)) {
            window.alert('Player1 is winner!');
        } else if (Math.ceil(num1) < Math.ceil(num2)) {
            window.alert('Player2 is winner!');
        } else {
            window.alert('Whooa JACKPOT BOTH PLAYERS ARE WINNERS!!!')
        }
    }, 300);
}

