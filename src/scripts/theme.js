let btn = document.querySelector('.bg-button');
let bgtext = document.querySelector('#bgtheme');
let bgBody = document.querySelector('.bg-white');
let bg = document.querySelectorAll('.bg-light');
let text = document.querySelectorAll('.text-dark');
let charts =  document.querySelectorAll('canvas');
let logo = document.getElementById('logo');
let navBar = document.querySelector('#navtrans');

let bgTrans = document.querySelectorAll('.bgOpaqueDark');
let svgBg = document.querySelectorAll('.space');
let modal = document.querySelectorAll('.modal');
let navbarToggler = document.querySelector('.navbar')

checkAndToggle();

btn.addEventListener('click', e => {

    if(localStorage.getItem('isDarkMode') == 'false'){
        localStorage.setItem('isDarkMode', 'true');
        toggleDarkMode(true);
        toggleModalDarkMode();
    } else {
        localStorage.setItem('isDarkMode', 'false');
        toggleLightMode(true);
        toggleModalLightMode();
    }

    btn.blur();
});

function checkAndToggle(){
     if(localStorage.getItem('isDarkMode') == 'true'){
        toggleDarkMode(false);
        setTimeout(() => toggleModalDarkMode(), 700);
        setTimeout(() => toggleChartDarkMode(), 800);
    }
    
    if(localStorage.getItem('isDarkMode') == 'false'){
        toggleLightMode();
        setTimeout(() => toggleModalLightMode(), 700);
        setTimeout(() => toggleChartLightMode(), 800);
    }
}

function toggleDarkMode(isClicked){
    if(localStorage.getItem('isDarkMode') == 'false'){ return; }

    // No background fading when reloading the page
    navBar.classList.remove('nav-trans')
    if(isClicked){
        navBar.classList.toggle('nav-trans')
    }

     for (let i = 0; i < bg.length; i++) {
        bg[i].classList.remove('bg-light');
        bg[i].classList.toggle('bg-dark');
        bg[i].classList.toggle('border-primary');
    }
    
    // background transitioning
    for(let i = 0; i< svgBg.length; i++){
        if(svgBg[i].classList.contains('bloblite')){
            svgBg[i].classList.remove('bloblite')
            svgBg[i].classList.toggle('blobdark')
        }
        if(svgBg[i].classList.contains('layeredwaveslite1')){
            svgBg[i].classList.remove('layeredwaveslite1')
            svgBg[i].classList.toggle('layeredwavesdark1')
        }
        if(svgBg[i].classList.contains('waveslite1')){
            svgBg[i].classList.remove('waveslite1')
            svgBg[i].classList.toggle('wavesdark1')
        }
        if(svgBg[i].classList.contains('blob-lite2')){
            svgBg[i].classList.remove('blob-lite2')
            svgBg[i].classList.toggle('blob-dark2')
        }
        if(svgBg[i].classList.contains('blob-lite-inverted2')){
            svgBg[i].classList.remove('blob-lite-inverted2')
            svgBg[i].classList.toggle('blob-dark-inverted2')
        }

        svgBg[i].classList.remove('bg-trans')
        if(isClicked){
            svgBg[i].classList.toggle('bg-trans')
        }
    }
   
    // change text color
    for (let i = 0; i < text.length; i++) {
        if(!text[i].classList.contains('text-info') && !text[i].classList.contains('transitioned')){
            text[i].classList.remove('text-dark');
            text[i].classList.toggle('text-info');
        }
    }

    // change row-col background
    for (let i = 0; i < bgTrans.length; i++) {
        if(!bgTrans[i].classList.contains('bgOpaqueLite')){
            bgTrans[i].classList.remove('bgOpaqueDark')
            bgTrans[i].classList.toggle('bgOpaqueLite')
        }
    }

    if(!navbarToggler.classList.contains('navbar-dark')){
        navbarToggler.classList.remove('navbar-light');
        navbarToggler.classList.toggle('navbar-dark');
    }

   bgtext.textContent = 'dark';
   logo.src = "./images/large_thumbnail_dark.png";
   
   toggleChartDarkMode()
}


function toggleLightMode(isClicked){
    if(localStorage.getItem('isDarkMode') == 'true'){ return; }

     // No background fading when reloading the page
     navBar.classList.remove('nav-trans')
     if(isClicked){
         navBar.classList.toggle('nav-trans')
     }

    for (let i = 0; i < bg.length; i++) {
        bg[i].classList.remove('bg-dark');
        bg[i].classList.remove('border-primary');
        bg[i].classList.toggle('bg-light');
    }

    // background transitioning
    for(let i = 0; i< svgBg.length; i++){
        if(svgBg[i].classList.contains('blobdark')){
            svgBg[i].classList.remove('blobdark')
            svgBg[i].classList.toggle('bloblite')
        }
        if(svgBg[i].classList.contains('layeredwavesdark1')){
            svgBg[i].classList.remove('layeredwavesdark1')
            svgBg[i].classList.toggle('layeredwaveslite1')
        }
        if(svgBg[i].classList.contains('wavesdark1')){
            svgBg[i].classList.remove('wavesdark1')
            svgBg[i].classList.toggle('waveslite1')
        }
        if(svgBg[i].classList.contains('blob-dark2')){
            svgBg[i].classList.remove('blob-dark2')
            svgBg[i].classList.toggle('blob-lite2')
        }
        if(svgBg[i].classList.contains('blob-dark-inverted2')){
            svgBg[i].classList.remove('blob-dark-inverted2')
            svgBg[i].classList.toggle('blob-lite-inverted2')
        }

        svgBg[i].classList.remove('bg-trans')
        if(isClicked){
            svgBg[i].classList.toggle('bg-trans')
        }
    }

    // change text color
    for (let i = 0; i < text.length; i++) {
        if(!text[i].classList.contains('text-dark') && !text[i].classList.contains('transitioned')){
            text[i].classList.remove('text-info');
            text[i].classList.toggle('text-dark');
        }
    }

     // change row-col background
    for (let i = 0; i < bgTrans.length; i++) {
        if(!bgTrans[i].classList.contains('bgOpaqueDark')){
            bgTrans[i].classList.remove('bgOpaqueLite')
            bgTrans[i].classList.toggle('bgOpaqueDark')
        }
    }

    if(!navbarToggler.classList.contains('navbar-light')){
        navbarToggler.classList.remove('navbar-dark');
        navbarToggler.classList.toggle('navbar-light');
    }

    bgtext.textContent = 'light';
    logo.src = "./images/large_thumbnail.png";

    toggleChartLightMode();
    // console.log(document.body.classList);
}

function toggleChartLightMode(){
    if(charts.length != 0){
        Chart.defaults.color = "#000000";
       
        charts.forEach((el) => {
           
            if(Chart.getChart(el.id) != null){
                if(Chart.getChart(el.id).options.scales['x'] !== undefined){
                    Chart.getChart(el.id).options.scales['x'].ticks.color = 'black';
                    Chart.getChart(el.id).options.scales['y'].ticks.color = 'black';
                }
                Chart.getChart(el.id).update();
            }
        });
    }
}

function toggleChartDarkMode(){
    if(charts.length != 0){
        Chart.defaults.color = "#FFFFFF";
        
        charts.forEach((el) => {
            if(Chart.getChart(el.id) != null){
                if(Chart.getChart(el.id).options.scales['x'] !== undefined){
                    Chart.getChart(el.id).options.scales['x'].ticks.color = 'white';
                    Chart.getChart(el.id).options.scales['y'].ticks.color = 'white';
                }
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
            modalContent[i].classList.toggle('text-info');
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
            modalContent[i].classList.remove('text-info');
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