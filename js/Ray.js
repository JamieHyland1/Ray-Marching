class Ray{
  constructor(x,y){
    this.pos = createVector(x,y)
    this.shortestDisance;
    this.radius;
    this.newRay;
  }
  show(){
    stroke(255)
    fill(255)
    ellipse(this.pos.x, this.pos.y,25,25)

  }
  getShortestDistance(buildings){
      let currentDistance = 0;
      let minDistance = 10000000;
      for(let building of buildings){
          currentDistance = sqrt(pow((building.pos.x-this.pos.x),2)+pow((building.pos.y-this.pos.y),2))-building.size/2;
          if(currentDistance < minDistance){
              minDistance = currentDistance
              this.shortestDisance = p5.Vector.sub(this.pos,building.pos)
          }
      }
      this.radius =  minDistance
  }
  castRay(){
    fill(255,255,255,100)
    stroke(255)
    ellipse(this.pos.x,this.pos.y,this.radius*2,this.radius*2)
    strokeWeight(2)
    line(this.pos.x,this.pos.y, this.pos.x + this.radius, this.pos.y)
    stroke(255,255,255,100)
    line(this.pos.x,this.pos.y, displayWidth, this.pos.y)
    this.newRay = createVector(this.pos.x + this.radius, this.pos.y);
  }
  update(x,y){
    this.pos.x = x;
    this.pos.y = y;

  }
}
