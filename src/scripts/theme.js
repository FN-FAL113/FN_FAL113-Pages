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
        toggleModalDarkMode();
    } else {
        localStorage.setItem('isDarkMode', 'false');
        toggleLightMode();
        toggleModalLightMode();
    }

    btn.blur();
});

function checkAndToggle(){
     if(localStorage.getItem('isDarkMode') != true){
        toggleDarkMode();
        setTimeout(() => toggleModalDarkMode(), 700);
        return;
    }
    toggleLightMode();
    setTimeout(() => toggleModalLightMode(), 700);
}

function toggleDarkMode(){
    if(localStorage.getItem('isDarkMode') == 'false'){ return; }

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


    // projects.html <p></p>
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
    if(localStorage.getItem('isDarkMode') == 'true'){ return; }

    for (let i = 0; i < bg.length; i++) {
        bg[i].classList.remove('bg-dark');
        bg[i].classList.remove('border-primary');

        bg[i].classList.toggle('bg-light');
    }

    // footer bar
    bgBody.classList.remove('bg-dark');
    bgBody.classList.remove('border-primary');
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

function toggleModalDarkMode(){
    if(localStorage.getItem('isDarkMode') == 'false'){ return; }

    let modal = document.querySelectorAll('.modal');
    let modalContent = document.querySelectorAll('.modal-content');
    let modalContentFooter = document.getElementsByClassName('.modal .modal-content .modal-footer');
    let modalContentForm = document.getElementsByClassName('.modal .form-control');
    let modalContenttable = document.getElementsByClassName('.modal .table');
   
    if(modal.length != 0 && modalContent.length != 0){
        for(let i = 0; i < modal.length; i++){
            modal[i].classList.toggle('modal-dark');
        }
        for(let i = 0; i < modalContent.length; i++){
            modalContent[i].classList.toggle('modal-dark');
        }
        for(let i = 0; i < modalContentFooter.length; i++){
            modalContentFooter[i].classList.toggle('modal-dark');
        }
        for(let i = 0; i < modalContentForm.length; i++){
            modalContentForm[i].classList.toggle('modal-dark');
        }
        for(let i = 0; i < modalContenttable.length; i++){
            modalContenttable[i].classList.toggle('modal-dark');
        }
    }
}

function toggleModalLightMode(){
    if(localStorage.getItem('isDarkMode') == 'true'){ return; }

    let modal = document.querySelectorAll('.modal');
    let modalContent = document.querySelectorAll('.modal-content');
    let modalContentFooter = document.getElementsByClassName('.modal .modal-content .modal-footer');
    let modalContentForm = document.getElementsByClassName('.modal .form-control');
    let modalContenttable = document.getElementsByClassName('.modal .table');

    if(modal.length != 0 && modalContent.length != 0){
        for(let i = 0; i < modal.length; i++){
            modal[i].classList.remove('modal-dark');
        }
        for(let i = 0; i < modalContent.length; i++){
            modalContent[i].classList.remove('modal-dark');
        }
        for(let i = 0; i < modalContentFooter.length; i++){
            modalContentFooter[i].classList.remove('modal-dark');
        }
        for(let i = 0; i < modalContentForm.length; i++){
            modalContentForm[i].classList.remove('modal-dark');
        }
        for(let i = 0; i < modalContenttable.length; i++){
            modalContenttable[i].classList.remove('modal-dark');
        }
    }
}
