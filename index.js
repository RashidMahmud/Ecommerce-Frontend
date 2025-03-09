

var sidenav = document.getElementById('#sidenav');
var menubar = document.getElementById('#menubar');
sidenav.style.width="0px";
menubar.onlcick=function(){
    if(sidenav.style.width=="0px"){
        sidenav.style.width="250px";
    }
    else{
        sidenav.style.width="0px";
    }
}
