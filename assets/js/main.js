const progressBar = document.getElementById("progress-bar");
section = document.querySelector(".section");

const animationProgressBar = () => {
	let scrollDistance = -section.getBoundingClientRect().top;
	let progressWidth =
		(scrollDistance /
			(section.getBoundingClientRect().height -
				document.documentElement.clientHeight)) *
		100;

	let value = Math.floor(progressWidth);
	progressBar.style.width = value + "%";
};

window.addEventListener("scroll", animationProgressBar);
