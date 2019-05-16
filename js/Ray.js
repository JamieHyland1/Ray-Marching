class Ray{
  constructor(x,y){
    this.pos = createVector(x,y)
  }
  show(){
    fill(255);
    noStroke();
    ellipse(this.pos.x, this.pos.y,50,50)
  }
  //Refactor buildings to user vectors to make it easier to draw line to shortest building
  getShortestDistance(buildings){
      let minDistance = 0;
      let currentDistance = 0;
      for(let building in buildings){
        currentDistance = sqrt(pow((building.x - this.pos.x),2) + pow((building.y-this.pos.y),2))-50;
        if(currentDistance < minDistance) minDistance = currentDistance;
      }
      return minDistance
  }
  update(x,y){
    this.pos.x = x;
    this.pos.y = y;

  }
}
