class Ray{
  constructor(x,y){
    this.pos = createVector(x,y)
    this.shortestDisance;
    this.test;
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

      this.test =  minDistance
  }
  castRay(){
    fill(255,255,255,100)
    ellipse(this.pos.x,this.pos.y,this.test*2,this.test*2)
    //line(this.pos.x,this.pos.y,this.shortestDisance.x*-1,-this.shortestDisance.y)
  }
  update(x,y){
    this.pos.x = x;
    this.pos.y = y;

  }
}
