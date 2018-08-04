//popoup

var popoup = document.getElementById("xdpop")

var img = document.getElementById('imgxd');
var popoupimg = document.getElementById("imgcyka");
img.onclick = function(){
    popoup.style.display = "block";
    popoupimg.src = this.src;
}

var span = document.getElementsByClassName("clsbtn")[0];
span.onclick = function() { 
    popoup.style.display = "none";
}