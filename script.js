// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function () {
    var top = window.scrollY;
    if (top >= 100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

function myFunction() {
    document.getElementById("dropDownCLick").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('navbar-toggler-icon')) {
        var dropdowns = document.getElementsByClassName("collapse navbar-collapse");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

