// Keycodes
// A - 65
// S - 83
// D - 68
// F - 70
// G - 71
// H - 72
// J - 74
// K - 75
// L - 76

function playSound(e){
	const audio = document.querySelector(`audio[data-keycode="${e.keyCode}"`);
	const key = document.querySelector(`.key[data-keycode="${e.keyCode}"`);
	if(!audio) return;
	audio.currentTime = 0;
	audio.play();
	key.classList.add('playing');
}
function removeTransition(e){
	if(e.propertyName !== 'transform') return;
	e.target.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);