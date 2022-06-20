let backToTop = document.getElementById("btn-back-to-top");
let nav = document.getElementById("navtrans"); 
let navText = document.querySelectorAll('.navtext');

navBarToggler();

window.onscroll = () => {
	onScrollDown();
}

// on navbar toggle change to non-transparent nav then vice versa
function navBarToggler(){
    $(window).on('show.bs.collapse', function() { 
        toggleNonTransparentNav();
    });

    $(window).on('hide.bs.collapse', function() { 
        toggleTransparentNav();
    });
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

	if(isDarkMode== 'false'){
		logo.src = "./images/large_thumbnail.png";
	}
	
}

function toggleNonTransparentNav(){
 	if (!nav.classList.contains('bgdark')) { 
		nav.classList.toggle('bgdark');
		nav.classList.toggle('border-bottom');
		for (let i = 0; i < navText.length; i++) {
			if(navText[i].classList.contains('text-dark')){
				navText[i].classList.remove('text-dark');
				navText[i].classList.toggle('text-info');
			}

			// when non transparent nav is toggled, add 'transitioned'
			// class to prevent theme toggling from changing the navText
			navText[i].classList.toggle('transitioned');
		}
		
		logo.src = "./images/large_thumbnail_dark.png";
	}
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


