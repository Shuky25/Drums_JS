let crashRide = document.querySelector('#crash-ride');
let hitHatTop = document.querySelector('#hihat-top');

const animateCrashOrRide = () => {
    crashRide.style.transform = 'rotate(0deg) scale(1.5)';
};

const animateHitHatClosed = () => {
    hitHatTop.style.top = '171px';
};

window.addEventListener('keydown', (event) => {
    let code = event.keyCode;

    let keyElement = document.querySelector(`div[data-key="${code}"]`)

    if (!keyElement) return;

    let audio = document.querySelector(`audio[data-key="${code}"]`);
    audio.currentiTime = 0;
    audio.play();

    switch (code) {
        case 69: case 82: animateCrashOrRide(); break;

        case 75: case 73: animateHitHatClosed(); break;
    }

    keyElement.classList.add('playing');

});

let drumKeys = document.querySelectorAll('.key');
drumKeys.forEach(key => {
    key.addEventListener('transitionend', e => {
        if(e.propertyName !== 'transform') return;

        e.target.classList.remove('playing');
    });
})

crashRide.addEventListener('transitionend', e => {
    if(e.propertyName !== 'transform') return;

    e.target.style.transform = 'rotate(-7.2deg) scale(1.5)';
});

hitHatTop.addEventListener('transitionend', e => {
    if(e.propertyName !== 'top') return;

    e.target.style.top = '166px';
});
