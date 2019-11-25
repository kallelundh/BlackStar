const navSlide = () => {
	const burger = document.querySelector(".burger");
	const nav = document.querySelector(".nav-links");
	const navLinks = document.querySelectorAll(".nav-links li");

	burger.addEventListener("click", () => {
		//Toggle navigation
		nav.classList.toggle("nav-active");

		//Animate links
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = "";
			} else {
				link.style.animation = `navLinkFade 0s ease forwards ${index / 10 +
					0.15}s`;
			}
		});
		//Burger animation
		burger.classList.toggle("toggle");
	});

	navLinks.forEach(link => {
		link.addEventListener("click", () => {
			nav.classList.remove("nav-active");
		});
	});

	navLinks.forEach(link => {
		link.addEventListener("click", () => {
			burger.classList.toggle("toggle");
		});
	});
};

navSlide();

/* Elinas sätt att göra
const video = document.querySelector('myVideo');
setTimeout(() => {
	video.play();
}, 2000)
*/

// mitt sätt att göra heheheh
myVideo.addEventListener("timeupdate", function () {
	// check whether we have passed 5 minutes,
	// current time is given in seconds
	if (this.currentTime >= 2.99999) {
		// pause the playback
		this.pause();
	}
});
//

//Horizontal scroll
const slider = document.querySelector(".slider");
const dots = document.querySelectorAll(".dot");

dots.forEach(dot => {
	dot.addEventListener("click", () => {
		const i = dot.dataset.index;
		const sliderRect = slider.getBoundingClientRect();

		slider.scrollLeft = sliderRect.width * i;
	});
});


slider.addEventListener("scroll", event => {

	const pageWidth = window.innerWidth;

	const dotContainer = document.getElementById('dot-container');

	for (let i = 0; i < dotContainer.childElementCount; i++) {
		const dot = dotContainer.children[i];

		if (
			(slider.scrollLeft + (pageWidth / 2)) >= pageWidth * i &&
			(slider.scrollLeft + (pageWidth / 2)) <= pageWidth * (i + 1)
		) {
			dot.classList.add('active');
		} else {
			dot.classList.remove('active');
		}

	}
});

