let buildings = []
let angle= 0;
let size
let eye;
function setup() {
   createCanvas(displayWidth,720);
   background(52);
   eye = new Eye(50,50)
   // for(var i = 0; i < 15; i++){
   //    size = random(60,200)
   //   buildings.push(new Building(random((displayWidth/3)-size,displayWidth),random(720-size),size, 'CIRCLE'))
   // }

}

function draw() {
    background(51);
    for(let building of buildings){
        building.show();
    }
    eye.update(50,mouseY)
    eye.castRays(buildings);
    eye.show();


}
function mousePressed(){
  size = random(60,200)

  buildings.push(new Building(mouseX, mouseY, size, 'CIRCLE'))
}
