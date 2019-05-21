class Building{
  constructor(x, y, size, shape){
    this.pos = createVector(x,y)
    this.size = size;
    this.shape = shape

  }
  show(){
    stroke(255);
    fill(0,0,0,100);
    (this.shape === 'BOX') ? rect(this.pos.x,this.pos.y,this.size,this.size) : ellipse(this.pos.x,this.pos.y,this.size,this.size);
  }
}
