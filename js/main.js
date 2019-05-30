/***************************************************************
*                         PARALAX                              *
****************************************************************/
function parallax(event){
  this.querySelectorAll('.header').forEach(layer => {
    layer.style.transform = `translateX(${-event.clientX/15}px)`;
  })
}

document.addEventListener('mousemove', parallax);

function mouseMoveY(event){
  let sun = this.querySelector('.header-article');
  sun.style.transform = `translateY(${ -event.clientY / 30}px)`;
}

document.addEventListener('mousemove', mouseMoveY);
/***************************************************************
*                         ChangeIMG                             *
****************************************************************/
var passiveItem0 = document.getElementsByClassName("work-item")[0];
var passiveItem1 = document.getElementsByClassName("work-item")[1];
var passiveItem2 = document.getElementsByClassName("work-item")[2];
var passiveItem3 = document.getElementsByClassName("work-item")[3];
var activeTtem = document.getElementsByClassName("work-item-active")[0];

var passiveImg0 = document.getElementById("w0");
var passiveImg1 = document.getElementById("w1");
var passiveImg2 = document.getElementById("w2");
var passiveImg3 = document.getElementById("w3");
var activeImg = document.getElementById("w");

passiveItem0.addEventListener( "click" , function() {
	let act = activeImg.getAttribute('src');
	let pas = passiveImg0.getAttribute('src');
	 passiveImg0.setAttribute('src', act);
	 activeImg.setAttribute('src', pas);
});

passiveItem1.addEventListener( "click" , function() {
	let act = activeImg.getAttribute('src');
	let pas = passiveImg1.getAttribute('src');
	 passiveImg1.setAttribute('src', act);
	 activeImg.setAttribute('src', pas)
});

passiveItem2.addEventListener( "click" , function() {
	let act = activeImg.getAttribute('src');
	let pas = passiveImg2.getAttribute('src');
	 passiveImg2.setAttribute('src', act);
	 activeImg.setAttribute('src', pas)
});

passiveItem3.addEventListener( "click" , function() {
	let act = activeImg.getAttribute('src');
	let pas = passiveImg3.getAttribute('src');
	 passiveImg3.setAttribute('src', act);
	 activeImg.setAttribute('src', pas)
});

/***************************************************************
*                         BackToTop                            *
****************************************************************/

window.onscroll = function() {
  var scrolled = document.documentElement.scrollTop;
}

let backToTop = document.getElementsByClassName("backToTop")[0]; 

backToTop.addEventListener( "click" , function() {
	
document.documentElement.scrollTop = 10;
});