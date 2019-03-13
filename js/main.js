const carousel = document.querySelector(".carousel-inner");
const item = carousel.querySelector(".carousel-item");
const leftButton = document.querySelector(".carousel-arrow.left");
const rightButton = document.querySelector(".carousel-arrow.right");
const carouselWidth = carousel.offsetWidth;
const itemsStyle = item.currentStyle || window.getComputedStyle(item)
const itemsMarginRight = Number(itemsStyle.marginRight.match(/\d+/g)[0]);
const itemsCount = carousel.querySelectorAll(".carousel-item").length;

let offset = 0;

const maxX = -((itemsCount / 5) * carouselWidth + 
               (itemsMarginRight * (itemsCount / 5)) - 
               carouselWidth - itemsMarginRight);


leftButton.addEventListener("click", function() {
	if (offset !== 0) {
		offset += carouselWidth + itemsMarginRight;
	} else {
		offset = maxX;
	}
	carousel.style.transform = `translateX(${offset}px)`;
})
  
rightButton.addEventListener("click", function() {
	if (offset !== maxX) {
		offset -= carouselWidth + itemsMarginRight;
	} else {
		offset = 0;
	}
	carousel.style.transform = `translateX(${offset}px)`;
})