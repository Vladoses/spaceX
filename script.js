var sliders = document.getElementsByClassName("slader-a");
var activeslayd = 0;
function allhide() {
    for(var i = 0; i < sliders.length; i ++){
        sliders[i].style.opacity = "0";
    }
}
var tr = setInterval(() => {
    nextslayd();
    console.log("next");
}, 3000);
function nextslayd() {
    allhide();
    if(activeslayd + 1 < sliders.length){
        activeslayd++;
    }
    else{
        activeslayd = 0;
    }
    sliders[activeslayd].style.opacity = "1";
}