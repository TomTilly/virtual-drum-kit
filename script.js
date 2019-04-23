const 	aAudioEl = document.querySelector('audio[data-keycode="65"]'),
		sAudioEl = document.querySelector('audio[data-keycode="83"]'),
		dAudioEl = document.querySelector('audio[data-keycode="68"]'),
		fAudioEl = document.querySelector('audio[data-keycode="70"]'),
		jAudioEl = document.querySelector('audio[data-keycode="74"]'),
		kAudioEl = document.querySelector('audio[data-keycode="75"]'),
		lAudioEl = document.querySelector('audio[data-keycode="76"]'),
		semicolonAudioEl = document.querySelector('audio[data-keycode="186"]');

const audioEls = document.querySelectorAll('audio');

audioEls.forEach(function(audioEl){
	audioEl.addEventListener('playing', function(e){
		const keyCode = e.target.dataset.keycode;
		const el = document.querySelector(`.key[data-keycode="${keyCode}"`);
		const className = el.className;
		el.className = className + ' playing';
		console.log('playing event triggered');
	});
	audioEl.addEventListener('ended', function(e){
		const keyCode = e.target.dataset.keycode;
		const el = document.querySelector(`.key[data-keycode="${keyCode}"`);
		el.className = el.className.replace(' playing', '');
		console.log('ended event triggered');
	});
});

window.addEventListener('keydown', function(e){
	const audio = document.querySelector(`audio[data-keycode="${e.keyCode}"`);
	if(!audio) return;
	audio.play();
});


// Keycodes
// A - 65
// S - 83
// D - 68
// F - 70
// J - 74
// K - 75
// L - 76
// ; - 186