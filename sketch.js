var dog; 
var happyDog;
var database;
var foodS;
var foodStock;

function preload()
{
  loadImage(script/doglmg.png);
  loadImage(script/doglmg1.png);
}

function setup() {
	createCanvas(500, 500);
  
  foodStock=database.ref('Food');
  foodStock.on("value,readStock");
}


function draw() {  

  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);

  }
  drawSprites();
  //add styles here

}



