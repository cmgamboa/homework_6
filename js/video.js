var video;
var volume;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	volume = document.querySelector("#volume");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	volume.innerHTML = "100%"
});

document.querySelector("#pause").addEventListener("click", function() {
console.log("Pause")
video.pause();
});

document.querySelector("#slower").addEventListener("click", function(){
	//let original = video.playbackRate()
	//original += 0.1;
	//video.playbackRate -= original;
	//console.log("Slow Down");
	console.log("Slow Video");
	video.playbackRate *= 0.9;
	console.log(video.playbackRate)
});
//slower
document.querySelector("#faster").addEventListener("click", function() {
	console.log(video.playbackRate);
	video.playbackRate /= 0.9;
	console.log(video.playbackRate)
});
//faster
document.querySelector("#skip").addEventListener("click", function() {
	console.log(video.currentTime);
	video.currentTime += 5
	console.log(video.currentTime)
});
//skip
document.querySelector("#mute").addEventListener("click", function() {
	console.log(video.muted)
	if (video.muted == false){
		video.muted = true
		this.innerHTML = "Unmute"
	}
	else{
		this.innerHTML = "Mute"
		video.muted = false
	}
	console.log(video.muted)
});
//mute

document.querySelector("#volumeSlider").addEventListener("change", function() {
	console.log("Volume Slider");
	video.volume = this.value /100
	console.log(this.value)
	volume.innerHTML = this.value + "%"
});
document.querySelector("#original").addEventListener("click", function() {
	console.log("Original");
	video.classList.remove("oldTime");
});
//old
document.querySelector("#old").addEventListener("click", function() {
	console.log("Old School");
	video.classList.add("oldTime");
});

