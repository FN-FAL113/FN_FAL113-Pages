let backToTop = document.getElementById("btn-back-to-top");


window.onscroll = function () {
	onScrollDown();
}


function onScrollDown(){
	if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
		backToTop.style.display = "block";
	} else {
		backToTop.style.display = "";
	}
}


backToTop.addEventListener('click', () =>{
	document.body.scrollTop = 0;
  	document.documentElement.scrollTop = 0;
});