var init = function() {
	soundManager.setup({
		url: '/soundManager/swf',
		flashVersion: 9,
		preferFlash: false,
		onready: function() {
			var mySound = soundManager.createSound({
				id: '16',
				url: '/music/16.mp3',
				onload: function() { console.log('sound loaded!', this); }
			});
			mySound.play();
		}
	});
	var myDiv = document.getElementById('myDiv');
	list = document.createElement('ul');
	entry = document.createElement('li');
	myDiv.appendChild(list);
	myDiv[1].appendChild(entry);
};
window.onLoad = init();