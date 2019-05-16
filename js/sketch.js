let buildings = []
let b = new Building(50,50,50)
let ray;
function setup() {
   createCanvas(displayWidth,720);
   background(52);
   ray = new Ray(50,50)
   for(var i = 0; i < 3; i++){
     let size = random(100,200)
     buildings.push(new Building(random(displayWidth-size),random(720-size),size, 'CIRCLE'))
   }
}

function draw() {
    background(51);
    for(let building of buildings){
        building.show();
    }
    ray.update(mouseX,mouseY);
    ray.show();
}
