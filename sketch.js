var ground,backgroundImg;
var man,maskman;
var invisibleGroun;
function preload()
{
	backgroundImg = loadImage("bg1.jpg");
	manimg = loadAnimation("man1.png","man2.png","man3.png");
}

function setup() {
	createCanvas(1000,500);
	
   /* bg = createSprite(500,250,20,20);
	bg.addImage(backgroundImg);
	bg.velocityX = -5;
	bg.x = bg.width/2
	bg.scale = 0.5;*/
	man = createSprite(100,400,20,20);
	man.addAnimation("man",manimg);
	man.scale=0.7

	invisibleGround = createSprite(50,490,1000,10);
	invisibleGround.visible = false;
}

function draw() {
    background(backgroundImg);
	/*bg.velocityX = -5;
	if(bg.x < 150){
       bg.x =bg.width/2
	}*/
	if(keyDown("space")&& man.y >= 250) {
        man.velocityY = -12;
        //jumpSound.play();
    }
	man.velocityY = man.velocityY + 0.8
 
	man.collide(invisibleGround)
  //To draw the sprites
  drawSprites();

}
