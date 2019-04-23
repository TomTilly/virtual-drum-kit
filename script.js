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
	});
	audioEl.addEventListener('ended', function(e){
		const keyCode = e.target.dataset.keycode;
		const el = document.querySelector(`.key[data-keycode="${keyCode}"`);
		el.className = el.className.replace(' playing', '');
	});
});

document.addEventListener('keydown', function(e){
	switch (e.keyCode) {
		case 65:
			console.log('hey');
			aAudioEl.play();
			break;
		default:
			console.log('invalid key');

	}
});



// A - 65
// S - 83
// D - 68
// F - 70
// J - 74
// K - 75
// L - 76
// ; - 186