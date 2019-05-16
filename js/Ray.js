class Ray{
  constructor(x,y){
    this.pos = createVector(x,y)
  }
  show(){
    fill(255);
    noStroke();
    ellipse(this.pos.x, this.pos.y,50,50)
  }

  update(x,y){
    this.pos.x = x;
    this.pos.y = y;

  }
}
