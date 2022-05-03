let btn = document.querySelector('.bg-button');
let bgtext = document.querySelector('#bgtheme');
let bgBody = document.querySelector('.bg-white');
let bg = document.querySelectorAll('.bg-light');
let text = document.querySelectorAll('.text-dark');
let charts =  document.querySelectorAll('canvas');
let projectsText =  document.querySelectorAll('p.text-dark');
let logo = document.getElementById('logo');


checkAndToggle();

btn.addEventListener('click', e => {

    if(localStorage.getItem('isDarkMode') == 'false'){
        localStorage.setItem('isDarkMode', 'true');
        toggleDarkMode();
    } else {
        localStorage.setItem('isDarkMode', 'false');
        toggleLightMode();
    }

    btn.blur();
});


function checkAndToggle(){
     if(localStorage.getItem('isDarkMode') == 'true'){
        toggleDarkMode();
    } else {
        toggleLightMode();
    }

}


function toggleDarkMode(){
     for (let i = 0; i < bg.length; i++) {
        bg[i].classList.remove('bg-light');

        bg[i].classList.toggle('bg-dark');
        bg[i].classList.toggle('border-primary');
       
    }

    // footer bar
    bgBody.classList.remove('bg-white');
    bgBody.classList.toggle('bg-dark');
    bgBody.classList.toggle('border-primary');

    for (let i = 0; i < text.length; i++) {
        text[i].classList.remove('text-dark');
        text[i].classList.toggle('text-info');
    }


    // projects.html
    for (let i = 0; i < projectsText.length; i++) {
        projectsText[i].classList.remove('text-dark');
        projectsText[i].classList.toggle('text-light');
    }

    document.body.classList.remove('bg-light');
    document.body.classList.toggle('bg-dark');
   
   // console.log(document.body.classList);
   bgtext.textContent = 'dark';
 
   logo.src = "./images/large_thumbnail_dark.png";
   
   if(charts.length != 0){
        Chart.defaults.color = "#FFFFFF";
        charts.forEach((el) => {
            
            if(Chart.getChart(el.id) != null){
                Chart.getChart(el.id).update();
            }
        });
    }
   
}

function toggleLightMode(){
     for (let i = 0; i < bg.length; i++) {
        bg[i].classList.remove('bg-dark');
        bg[i].classList.remove('border-primary');

        bg[i].classList.toggle('bg-light');
       
    }

    // footer bar
    bgBody.classList.remove('bg-dark');
    bgBody.classList.remove('bo-primary');
    bgBody.classList.toggle('bg-white');

    for (let i = 0; i < text.length; i++) {
        text[i].classList.remove('text-info');
        text[i].classList.toggle('text-dark');
    }

    document.body.classList.remove('bg-dark');
    document.body.classList.toggle('bg-light');

    bgtext.textContent = 'light';
    logo.src = "./images/large_thumbnail.png";
   
   // console.log(document.body.classList);
   
    if(charts.length != 0){

        Chart.defaults.color = "#666";
        charts.forEach((el) => {
           
            if(Chart.getChart(el.id) != null){
                Chart.getChart(el.id).update();
            }
        });
    }
   
}

