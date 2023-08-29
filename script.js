const MAX_WIDTH_SLIDER = -970;
let curr_width_line = 0;
let check_review = 0;

sliderLine = document.querySelector('.slider-line');
slider_btn_checks = document.querySelectorAll('.slider-check');

btn_slider = document.querySelector('.next-btn');

btn_slider.addEventListener('click', ()=>{
    curr_width_line -= 330;
    if(curr_width_line <= MAX_WIDTH_SLIDER){
        check_review = 0;
        curr_width_line = 0;

        //reset color
        slider_btn_checks.forEach(element => {
            element.style["background-color"] = "#D9EFEA";
        });

        slider_btn_checks[check_review].style["background-color"] = "black"; 
        sliderLine.style["left"] = `${curr_width_line}px`;
        return;
    }
    check_review += 1;
    sliderLine.style["left"] = `${curr_width_line}px`; 
    slider_btn_checks[check_review].style["background-color"] = "black"; 


});

let burger_menu = document.querySelector('.burger-menu').addEventListener('click', ()=>{
    console.log("button click");
    let menu_active = document.querySelector('.nav').classList.toggle('active-menu');
});