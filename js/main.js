$(document).ready(function(){
   //STICKY MENU
    $(".js--Services-Section").waypoint(function(direction){
        if (direction == "down"){
            $("nav").addClass("sticky");
        }else{
            $("nav").removeClass("sticky");
        }
    });
    
    
  //mixitup (Protfolio section)
  var mixer = mixitup(".container");
});
//MOBILE NAV
function openNav(){
    document.getElementById("myNav").style.width = "100%";
}

function closeNav(){
    document.getElementById("myNav").style.width = "0%";
}