class Eye{
  constructor(x,y,ray){
    this.pos = createVector(x,y);
    this.rays = [new Ray(this.pos.x,this.pos.y)];

  }
  show(){
    fill(0)
    ellipse(this.pos.x,this.pos.y,this.pos.x,this.pos.x)
  }
  update(x,y){
    this.pos.x = x;
    this.pos.y = y;
  }
  castRays(buildings){
    if(buildings.length != 0){
      stroke(255)
      for(let ray of this.rays){
         ray.update(ray.pos.x,this.pos.y)
         ray.getShortestDistance(buildings)
         ray.show();
         ray.castRay();
      }
        this.removeRays();
        if(this.rays[this.rays.length-1].radius > 30){
            this.createRay();
        }
      }
  }

  createRay(){
          let currentRayX = this.rays[this.rays.length-1]
          strokeWeight(10)
          this.rays.push(new Ray(currentRayX.newRay.x,currentRayX.newRay.y))
          strokeWeight(2)
    }
  removeRays(){
    for(var i = 0; i < this.rays.length; i++){
      if(this.rays[i].radius < 50) this.rays.splice(i)
    }
  }

}
