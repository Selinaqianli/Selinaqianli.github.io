addEventListener("load", function() {
    setTimeout(hideURLBar, 0);
}, false);

function hideURLBar(){
    window.scrollTo(0,1);
}

var scene = document.getElementById('scene');
var parallax = new Parallax(scene);