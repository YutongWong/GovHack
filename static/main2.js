function filterFunction2(me) {
    var input, filter, a, i;
    // input = document.getElementById("in");
    filter = me.value.toLowerCase();
    a = document.getElementById("options2").getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        value = a[i].textContent || a[i].innerText;
        if(value.toLowerCase().indexOf(filter)>-1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

window.onload = function() {
    document.getElementById("header").classList.toggle("header2");
}

// function nextq() {
//     document.getElementById("first-q").style.display = "none";
//     document.getElementById("nextbtn").style.display = "none";
//     console.log(document.getElementById("header").classList.contains("header1"));
//     // document.getElementById("header").classList.toggle("header2");
//     window.location.href = "index2.html";
//     window.onload = function() {
//         window.prompt("hiii");
//         document.getElementById("header").classList.toggle("header2");
//     }
//     document.getElementById("second-q").style.display = "block";
//     // document.getElementById("sendit").style.display = "block";
//     // document.getElementById("first-q").style.opacity = 0;
//     // document.getElementById("first-q").style.transition = "opacity 3s ease-in-out";
// }

function fillin2(me) {
    document.getElementById("in2").value = me.textContent;  
}
