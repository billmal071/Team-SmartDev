function showTab(evt, tabName) {
    var i, x, tablinks;;
    x = document.getElementsByClassName("sign");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";

    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function checkPass() {
    var p1 = document.getElementById("pwd").value;
    var p2 = document.getElementById("cpwd").value;
    if (p2 !== p1) {
        document.getElementById("show").innerHTML = "password and confirm password dont match.";
        document.getElementById("show").classList.add("w3-show");
        document.getElementById("show").classList.remove("w3-hide");
    } else {
        document.getElementById("show").classList.remove("w3-show");
        document.getElementById("show").classList.add("w3-hide");
    }
}