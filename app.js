const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');


	burger.addEventListener('click', () => {
		//Toggle navigation
		nav.classList.toggle('nav-active');

		//Animate links
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = '';
			} else {
				link.style.animation = `navLinkFade 0s ease forwards ${index / 10 + 0.15}s`;
			}
		});
		//Burger animation
		burger.classList.toggle('toggle');

	});

	navLinks.forEach(link => {
		link.addEventListener('click', () => {
			nav.classList.remove('nav-active');
		})
	})

	navLinks.forEach(link => {
		link.addEventListener('click', () => {
			burger.classList.toggle('toggle');
		})
	})


}

navSlide();


/*
        const video = document.querySelector("video");
        setTimeout(() => {
            video.play();
        }, 10000)
*/