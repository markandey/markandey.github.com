window.addEventListener('deviceorientation', function(event) {
  var a = event.alpha;
  var b = event.beta;
  var g = event.gamma;
  var el=document.body;
  if(el){
  	var style=el.style;	
    //style.webkitTransform = 'rotateZ(' + (-1.0 * g) + 'deg)';
  }
}, false);

document.body.addEventListener("online", function () {alert('online')});
document.body.addEventListener("offline", function () {alert('offline')});
var mousedown,pos={};
var canvas = document.getElementById('canvas');
var posdiv = document.getElementById('pos');
ctx = canvas.getContext('2d');


window.onload=function(event) {
  canvas.width=canvas.offsetWidth;
  canvas.height=canvas.offsetHeight;
  ctx.strokeStyle = '#0000FF';
  ctx.lineWidth = 1; 
  imgurl=localStorage.getItem('draw');
  img =new Image();
  img.src=imgurl;
  img.onload=function(){
      ctx.drawImage(img,0,0);
  };

}   
canvas.onmousedown = function(e) {
    pos = {'x':e.offsetX,'y':e.offsetY}
    mousedown = true;
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
    return false;
};

canvas.onmousemove = function(e) {
  pos = {'x':e.offsetX,'y':e.offsetY}
  posdiv.innerHTML=e.offsetX+" "+e.offsetY;
  console.log(e);
    if (mousedown) {
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();
        ctx.moveTo(pos.x, pos.y);
    }
};

canvas.onmouseup = function(e) {
    mousedown = false;
    var dataURL = canvas.toDataURL("image/png");
    localStorage.setItem('draw',dataURL);
};


