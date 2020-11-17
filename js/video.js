var video;
var volume;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	volume = document.quer
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
console.log("Pause")
video.pause();
});

document.querySelector("#slower").addEventListener("click", function(){
	let original = video.playbackRate()
	original += 0.1;
	video.playbackRate -= original;
	console.log("Slow Down");
});
//slower
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Pause")
});
//faster
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause")
});
//skip
document.querySelector("#pause").addEventListener("change", function() {
	console.log("Volume Slider");
	video.volume = this.value /100
	console.log(this.value)
});
//mute

document.querySelector("#volumeSlider").addEventListener("click", function() {
	console.log("Pause")
});
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause")
});
//old
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause")
});

