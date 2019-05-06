function Blob(x, y, r, color) {
    this.pos = createVector(x, y);
    this.r = r;
    this.vel = createVector(0,0);
    this.color = color;
  
    this.update = function() {
      var newvel = createVector(mouseX-width/2, mouseY-height/2);
      newvel.div(100);
      //newvel.setMag(3);
      newvel.limit(3);
      this.vel.lerp(newvel, 0.9);
      this.pos.add(this.vel);
    }
  
    this.eats = function(other) {
      var d = p5.Vector.dist(this.pos, other.pos);
      if (d < this.r + other.r) {
        var sum = PI * this.r * this.r + PI * other.r * other.r;
        this.r = sqrt(sum / PI);
        //this.r += other.r;
        return true;
      } else {
        return false;
      }
    }

    this.constrain = function() {
      blob.pos.x = constrain(blob.pos.x, -width, width);
      blob.pos.y = constrain(blob.pos.y, -height, height);
    }
  
    this.show = function() {
      fill(this.color);
      ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
    }
  }