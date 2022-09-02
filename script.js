let darkmode = localStorage.getItem('darkMode');   //Establishing the Local Storage 
const btnbg = document.querySelector('.btn-bg');   //Toggle Button Background 
const togglebtn = document.querySelector('.toggle-btn');    //Toggle button 

// Method 1

// Creating the Variable for Toggling the Dark Mode. 
const EnableDarkMode = ()=> {
    document.body.classList.add('darkMode');
    localStorage.setItem('darkMode', 'enabled');
    togglebtn.classList.add('shift-btn');
}
const DisableDarkMode = ()=> {
    document.body.classList.remove('darkMode');
    localStorage.setItem('darkMode', 'disabled');
    togglebtn.classList.remove('shift-btn');
}

// To make sure if dark mode is enabled then stay enabled even after a referesh.

// Checking if the value of darkmode is enabled or not.
// If it is enabled, then stay enabled even after refereshing the page.
// If it is disabled, then stay disabled even after refereshing the page.
if(darkmode === 'enabled') {
    EnableDarkMode();
}

// Working of the below If and else Statement. 

// Checking if the DarkMode is enabled or not.
// If it is Disabled, then add the darkmode class in the body. 
// If it is Enabled, then remove the darkmode class from the body. 

// Toggling The Dark Mode. 
togglebtn.addEventListener('click', () => {
    darkmode = localStorage.getItem('darkMode');
    if(darkmode !== 'enabled') {
        EnableDarkMode();
    }
    else {
        DisableDarkMode();
    }
});

// Method 2 for Toggling the Dark Mode but without Local Storage.

// togglebtn.addEventListener( 'click', ()=> {
    // For Toggling the Dark Mode. 
    // if(document.body.classList.contains('darkMode')) {
    //     document.body.classList.remove('darkMode');
    // }
    // else {
    //     document.body.classList.add('darkMode');
    // }

        // For toggling the class position of the button.
//     if (togglebtn.classList.contains('shift-btn')) {
//         togglebtn.classList.remove('shift-btn');
//     }
//     else{
//         togglebtn.classList.add('shift-btn');
//     }
// });


