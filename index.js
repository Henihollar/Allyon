const open = document.getElementById("navClick");
open.addEventListener("click", function(){
    document.getElementById("open").style.left = "0";
} );

const close = document.getElementById("navClicks");
close.addEventListener("click", function(){
    document.getElementById("open").style.left = "-250px";
});

