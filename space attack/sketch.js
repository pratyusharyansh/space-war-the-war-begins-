 var backgroundimg1,heroimg;
 var hero, minialien1,minialien2,assitant1,assitant2,assitant3,assitant4,boss;
function preload (){
    backgroundimg1=loadImage("background.jpg")
    heroimg=loadImage("hero.jpg")
}
function setup(){
    createCanvas(windowWidth,windowHeight)
    hero=createSprite(400,800,100,100);
    hero.addImage("boy",heroimg)
}
function draw(){
  //  background("blue");
    drawSprites();
}