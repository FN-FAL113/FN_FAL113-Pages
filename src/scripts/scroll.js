let backToTop = document.getElementById("btn-back-to-top");
let nav = document.getElementById("nav-trans"); 


window.onscroll = function () {
	onScrollDown();
}

console.log(nav);

function toggleTransparentNav(){
	nav.classList.toggle('bg-light');
	nav.classList.toggle('bg');
	nav.classList.remove('shadow');
	nav.classList.remove('border-bottom');
	nav.classList.remove('bg-lightgrey');
	nav.classList.remove('nav-trans');
}

function toggleNonTransparentNav(){
	if(localStorage.getItem('isDarkMode') == 'true' && !nav.classList.contains('border-bottom')){
		nav.classList.remove('bg-light');
		nav.classList.remove('bg');
		nav.classList.toggle('bg-lightgrey')
		nav.classList.toggle('border-bottom');
		nav.classList.toggle('nav-trans');
	} else if (!nav.classList.contains('bg-lightgrey')) {
		nav.classList.remove('bg-light');
		nav.classList.remove('bg');
		nav.classList.toggle('bg-lightgrey');
		nav.classList.toggle('border-bottom');
		nav.classList.toggle('shadow');
		nav.classList.toggle('nav-trans');
	}
}

function onScrollDown(){
	if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
		backToTop.style.display = "block";
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