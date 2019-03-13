const carousel = document.querySelector(".carousel-inner");
const item = carousel.querySelector(".carousel-item");
const leftButton = document.querySelector(".carousel-arrow.left");
const rightButton = document.querySelector(".carousel-arrow.right");
const carouselWidth = carousel.offsetWidth;
const itemsStyle = item.currentStyle || window.getComputedStyle(item)
const itemsMarginRight = parseFloat(itemsStyle.marginRight.match(/[+-]?([0-9]*[.])?[0-9]+/)[0]) + parseFloat(itemsStyle.marginLeft.match(/[+-]?([0-9]*[.])?[0-9]+/)[0]);
const itemsCount = carousel.querySelectorAll(".carousel-item").length;
let offset = 0;

//find the with of screen and the items to show
let windowWidth = window.innerWidth;
let itemsShow = 2;
if (windowWidth > 1200) itemsShow = 5
else if (windowWidth > 992) itemsShow = 4
else if (windowWidth > 768) itemsShow = 3

//find the max width of the carousel.
const maxX = -((itemsCount / itemsShow) * carouselWidth + 
               (itemsMarginRight * (itemsCount / itemsShow)) - 
               carouselWidth - itemsMarginRight);

//Controls events
leftButton.addEventListener("click", function() {
	if (offset < 0) {
		offset += carouselWidth + itemsMarginRight;
	} else {
		offset = maxX;
	}
	carousel.style.transform = `translateX(${offset}px)`;
})
  
rightButton.addEventListener("click", function() {
	if (offset > maxX) {
		offset -= carouselWidth + itemsMarginRight;
	} else {
		offset = 0;
	}
	carousel.style.transform = `translateX(${offset}px)`;
})