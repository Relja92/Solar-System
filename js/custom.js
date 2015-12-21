
//rotate element on axis with selected speed
function rotate (element, axis, speed){
    var angle=0;
    setInterval(function(){
        element.rotation[axis]=angle;
        angle=angle+speed;
    }, 30);
}