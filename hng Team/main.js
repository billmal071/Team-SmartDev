function showTab(tabName) {
    var i;
    var x = document.getElementsByClassName("sign");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";

    }
    document.getElementById(tabName).style.display = "block";
}

// Get the container element
var btnContainer = document.getElementById("myBut");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}