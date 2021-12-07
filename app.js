function showPsw(e) {
    var passwordInput = document.getElementById('passwordInput');
    if (e.className === 'fas fa-lock') {
        e.className = 'fas fa-unlock';
        passwordInput.type = 'text';
    } else {
        e.className = 'fas fa-lock';
        passwordInput.type = 'password';
    }
}


function showConfirmPsw(e) {
    var confirmPasswordInput = document.getElementById('confirmPasswordInput');
    if (e.className === 'fas fa-lock') {
        e.className = 'fas fa-unlock';
        confirmPasswordInput.type = 'text';
    } else {
        e.className = 'fas fa-lock';
        confirmPasswordInput.type = 'password';
    }
}



function darkMode(e) {
    var mainBody = document.getElementById("mainBody");
    // mainBody.style.backgroundColor = "#181816";
    var colors = document.getElementById('colors');

    if (e.innerHTML === "DARK MODE") {
        e.innerHTML = "LIGHT MODE";
        e.className = "btn btn-light";
        mainBody.style.backgroundColor = "#181816";
        mainBody.style.color = "#f1f1f1";
        colors.style.color = '#181816';
        colors.style.backgroundColor = '#f1f1f1'
       
    } else {
        e.innerHTML = "DARK MODE";
        e.className = "btn btn-dark";
        mainBody.style.backgroundColor = "white";
        mainBody.style.color = "#181816";
        
    }

}


function faqsquestion(e) {
    console.log(e.nextElementSibling);
    var nextSibling = e.nextElementSibling;
    if (nextSibling.className === 'answer') {
        nextSibling.className = ('answerShow animate__animated animate__fadeIn')
    } else {
        nextSibling.className = 'answer';
    }
}