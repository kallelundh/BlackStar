// Vertical scroll



const section = document.querySelector('section');
const buttons = document.querySelectorAll('.vert-dot');

section.addEventListener("scroll", event => {

    const pageHeight = window.innerWidth;

    const dotContainer = document.getElementById('dot-container');

    for (let i = 0; i < dotContainer.childElementCount; i++) {
        const dot = dotContainer.children[i];

        if (
            (slider.scrollLeft + (pageHeight / 2)) >= pageHeight * i &&
            (slider.scrollLeft + (pageHeight / 2)) <= pageHeight * (i + 1)
        ) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }

    }

});

// function removeHighlight() {
// 	buttons.forEach(button => {
// 		button.classList.remove('.vert-dot active');
// 	});
// }
// function buttonHighlight() {
// 	totalHeight = main.scrollHeight;
// 	currentHeight = main.scrollTop;
// 	sectionHeight = totalHeight / 7;
// 	if (currentHeight < (sectionHeight / 2)) {
// 		removeHighlight();
// 		buttons[0].classList.add('.vert-dot.active');
// 	} else if (currentHeight > (sectionHeight / 2) && currentHeight < (sectionHeight * 1.5)) {
// 		removeHighlight();
// 		buttons[1].classList.add('.vert-dot.active');
// 	} else if (currentHeight > (sectionHeight * 1.5) && currentHeight < (sectionHeight * 2.5)) {
// 		removeHighlight();
// 		buttons[2].classList.add('.vert-dot.active');
// 	} else if (currentHeight > (sectionHeight * 2.5) && currentHeight < (sectionHeight * 3.5)) {
// 		removeHighlight();
// 		buttons[3].classList.add('.vert-dot.active');
// 	}
// }
// main.addEventListener('scroll', buttonHighlight);
