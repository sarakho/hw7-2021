var video = document.getElementById("player1");
var playButton = document.getElementById("play");
var pauseButton = document.getElementById("pause");
var slowButton = document.getElementById("slower");
var speedButton = document.getElementById("faster");
var skipButton = document.getElementById("skip");
var volume = document.getElementById("slider");


window.addEventListener("load", function() {
	console.log("Good job opening the window");
	this.document.querySelector(".video").autoplay = false;
});

playButton.addEventListener("click", function() {
	if (video.paused == true) {
		video.play();
		playButton.innerHTML = "Play Video";
	} 
});

pauseButton.addEventListener("click", function () {
	if (video.paused == false) {
		video.pause();
		playButton.innerHTML = "Play Video";
	}
});

slowButton.addEventListener("click", function () {
	if (video.paused == false) {
		video.playbackRate = video.playbackRate - video.playbackRate * 0.1;
		console.log("new speed = "+ video.playbackRate);
	}
});

speedButton.addEventListener("click", function () {
	if (video.paused == false) {
		video.playbackRate = video.playbackRate * 2;
		console.log("new speed " + video.playbackRate);
	}
});

skipButton.addEventListener("click", function () {
	video.currentTime = video.currentTime + 10;
	console.log("skip ahead")
});

document.getElementById("volume").innerHTML=volume_value;
video.volume = volume_value / 100;

// document.querySelector("slider").addEventListener("change", function() {
// 	console.log(this)
// 	console.log(this.value)
	
// 	bd = document.querySelector("volume")
// 	bd.volume = this.value / 100
// })

// 	console.log("Play Video");
// });

