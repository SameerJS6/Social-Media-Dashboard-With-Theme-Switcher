const body = document.getElementById('body');
const btnbg = document.querySelector('.btn-bg');
const togglebtn = document.querySelector('.toggle-btn');


togglebtn.addEventListener( 'click', ()=> {
    if(body.classList.contains('darkMode')) {
        body.classList.remove('darkMode');
    }
    else {
        body.classList.add('darkMode');
    }

    if (togglebtn.classList.contains('shift-btn')) {
        togglebtn.classList.remove('shift-btn');
    }
    else{
        togglebtn.classList.add('shift-btn');
    }
    console.log("clicked");
});