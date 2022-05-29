let backToTop = document.getElementById("btn-back-to-top");
let nav = document.getElementById("navtrans"); 
let navText = document.querySelectorAll('.navtext');


window.onscroll = function () {
	onScrollDown();
}

function toggleTransparentNav(){
	let isDarkMode = localStorage.getItem('isDarkMode');
	nav.classList.remove('shadow');
	nav.classList.remove('border-bottom');
	nav.classList.remove('bgdark');
	for (let i = 0; i < navText.length; i++) {
		if(!navText[i].classList.contains('text-dark')){
			navText[i].classList.remove('transitioned');
			if( isDarkMode== 'false'){
				navText[i].classList.remove('text-info');
				navText[i].classList.toggle('text-dark');
			}
			
		}
	}
	logo.src = "./images/large_thumbnail.png";
}

function toggleNonTransparentNav(){
	if(localStorage.getItem('isDarkMode') == 'true' && !nav.classList.contains('border-bottom')){
		nav.classList.toggle('bgdark')
		nav.classList.toggle('border-bottom');
		for (let i = 0; i < navText.length; i++) {
			if(!navText[i].classList.contains('text-info')){
				navText[i].classList.remove('text-dark');
				navText[i].classList.toggle('text-info');
				navText[i].classList.toggle('transitioned');
			}
		}
	} else if (!nav.classList.contains('bgdark')) {
		nav.classList.toggle('bgdark');
		nav.classList.toggle('border-bottom');
		nav.classList.toggle('shadow');
		for (let i = 0; i < navText.length; i++) {
			if(!navText[i].classList.contains('text-info')){
				navText[i].classList.remove('text-dark');
				navText[i].classList.toggle('text-info');
				navText[i].classList.toggle('transitioned');
			}
		}
	}
	logo.src = "./images/large_thumbnail_dark.png";

}

function onScrollDown(){
	if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
		backToTop.style.display = "block";
		nav.classList.add('nav-trans')
		toggleNonTransparentNav();
	} else {
		backToTop.style.display = "";
		toggleTransparentNav();	
	}
}

backToTop.addEventListener('click', () =>{
	document.body.scrollTop = 0;
  	document.documentElement.scrollTop = 0;
});


