const btn = document.querySelector('.bg-button');
const bgtext = document.querySelector('#bgtheme');
let bg = document.querySelectorAll('.bg-light');
let text = document.querySelectorAll('.text-dark');
let charts =  document.querySelectorAll('canvas');
let projectsText =  document.querySelectorAll('p.text-dark');


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
   
   if(charts.length != 0){
        Chart.defaults.color = "#FFFFFF";
        charts.forEach((el) => {
            Chart.getChart(el.id).update();
        });
    }
   
}

function toggleLightMode(){
     for (let i = 0; i < bg.length; i++) {
        bg[i].classList.remove('bg-dark');
         bg[i].classList.remove('border-primary');

        bg[i].classList.toggle('bg-light');
       
    }

    for (let i = 0; i < text.length; i++) {
        text[i].classList.remove('text-info');
        text[i].classList.toggle('text-dark');
    }

    document.body.classList.remove('bg-dark');
    document.body.classList.toggle('bg-light');

     bgtext.textContent = 'light';
   
   // console.log(document.body.classList);
   
    if(charts.length != 0){
        Chart.defaults.color = "#666";
        charts.forEach((el) => {
            Chart.getChart(el.id).update();
        });
    }
   
}

