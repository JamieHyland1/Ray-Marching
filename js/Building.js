class Building{
  constructor(x, y, size, shape){
    this.x = x;
    this.y = y;
    this.size = size;
    this.shape = shape

  }
  show(){
    noStroke();
    fill(0);
    (this.shape === 'BOX') ? rect(this.x,this.y,this.size,this.size) : ellipse(this.x,this.y,this.size,this.size);
  }
}
