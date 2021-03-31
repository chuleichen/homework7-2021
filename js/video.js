var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector(".video");
	console.log(video);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
})

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate -= 0.05;
	console.log("The speed now is " + video.playbackRate);
})

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate += 0.05;
	console.log("The speed now is " + video.playbackRate);
})

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 15 > video.duration) {
		video.currentTime = 0
	} else {
		video.currentTime += 15;
	}
	console.log("The current location is " + video.currentTime);
	video.play()
})

document.querySelector("#mute").addEventListener("click", function() {
	if (video.volume == 0) {
		video.volume = 1;
		document.querySelector("#mute").innerHTML = "Mute";
	} else {
		video.volume = 0;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
})

document.querySelector("#slider").addEventListener("change", function(){
	console.log(this.value);
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = this.value + "%";
})

document.querySelector("#vintage").addEventListener("click", function() {
	document.querySelector(".video").className = "video oldSchool"
})

document.querySelector("#orig").addEventListener("click", function() {
	document.querySelector(".video").className = "video"
})