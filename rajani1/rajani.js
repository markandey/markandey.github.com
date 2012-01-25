var t=true;
window.addEventListener('deviceorientation', function(event) {
  var a = event.alpha;
  var b = event.beta;
  var g = event.gamma;
  if(t){
  	console.log(event);
  	t=false;	
  }
  
  var el=document.querySelector('#rajani')
  if(el){
  	var style=el.style;	
  	style.webkitTransform = 'rotateZ(' + (-1.0 * g) + 'deg)';
  }
}, false);
