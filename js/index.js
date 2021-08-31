addEventListener("load", function() {
    setTimeout(hideURLBar, 0);
}, false);

function hideURLBar(){
    window.scrollTo(0,1);
}

var scene = document.getElementById('scene');
var parallax = new Parallax(scene);

function openPage(pageName, elmnt) {
    // Hide all elements with class="pagecontent" by default */
    var i, pagecontent;
    pagecontent = document.getElementsByClassName("pagecontent");
    for (i = 0; i < pagecontent.length; i++) {
        pagecontent[i].style.display = "none";
    }

    // Show the specific tab content
    document.getElementById(pageName).style.display = "flex";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpenPage").click(); 