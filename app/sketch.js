var blob;
var socket;
var blobs = [];
var blobs2 = [];
var zoom = 1;
var puntaje = 0;
var blob2;
var colores = ['#F1948A','#F0B27A','#85C1E9','purple','#82E0AA','#229954','#C39BD3','#CB4335','#21618C'];

function setup() {
  createCanvas(1324,640);
  //Abre la conexión del socket con el servidor nodejs
  socket = io.connect('http://localhost:3000');

  //El circulo dorado
  blob2 = new Blob(random(width), random(height), random(4, 7), '#efb810');
  //Circulos random
  for (var i = 0; i < 500; i++) {
    var x = random(-width,width);
    var y = random(-height,height);
    blobs2[i] = new Blob(x, y, random(2, 7),'#ffdfa1');
  }

  blob = new Blob(random(width), random(height), random(8, 14), random(colores));
  var data = {
    x: blob.pos.x,
    y: blob.pos.y,
    r: blob.r,
    color: blob.color
  };
  socket.emit('start', data);
  socket.on('heartbeat',
    function(data) {
      blobs = data;
    }
  );
}

function draw() {
  background('#e0c0c0');
  translate(width/2, height/2);
  var newzoom = 64 / blob.r;
  zoom = lerp(zoom, newzoom, 0.1);
  scale(zoom);
  translate(-blob.pos.x, -blob.pos.y);
  for (var i = blobs.length-1; i >=0; i--) {
    var id = blobs[i].id;
    if (id.substring(2, id.length) !== socket.id) {
      fill(blobs[i].color);
      ellipse(blobs[i].x, blobs[i].y, blobs[i].r * 2, blobs[i].r * 2);
      //id en el canvas
      fill(255);
      textAlign(CENTER);
      textSize(4);
      text(blobs[i].id, blobs[i].x, blobs[i].y + blobs[i].r);
    }
  }

  for (var i = blobs2.length-1; i >=0; i--) {
    blobs2[i].show();
    if (blob.eats(blobs2[i])) {
      blobs2.splice(i, 1);
      this.puntaje++;
    }
  }
  if(blob2 != null){
    blob2.show();
  
    if(blob.eats(blob2)){
      blob2 = null;
      this.puntaje = this.puntaje + 150;
    }
  }

  blob.show();
  if (mouseIsPressed) {
    blob.update();
  }
  blob.constrain();

  var data = {
    x: blob.pos.x,
    y: blob.pos.y,
    r: blob.r,
    color: blob.color
  };
  socket.emit('update', data);

  for(var i=0; i < blobs2.length; i++){
      blobs2[i].show();
  }

  var html = `<strong>Puntaje</strong>
              <p>${this.puntaje}</p>`;
  document.getElementById('puntaje').innerHTML = html;

}