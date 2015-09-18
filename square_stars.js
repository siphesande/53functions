function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

  return ctx.fillRect(25,25,100,100);
    
  }
}