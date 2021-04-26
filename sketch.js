var red,green,blue,yellow
var block
var edge1, edge2, edge3, edge4

function preload(){
    sound=loadSound("music.mp3")
}

function setup(){
    createCanvas(510,500)
    blue=createSprite(55,480,125,20)
    blue.shapeColor="blue"

    yellow=createSprite(185,480,125,20)
    yellow.shapeColor="yellow"

    red=createSprite(315,480,125,20)
    red.shapeColor="red"

   green=createSprite(445,480,125,20)
   green.shapeColor="green"

   block=createSprite(250,50,20,20)
   
    
   edge1=createSprite(250,0,500,5)
   edge1.visible=false

   edge2=createSprite(0,250,5,500)
   edge2.visible=false

   edge3=createSprite(510,250,5,500)
   edge3.visible=false

   edge4=createSprite(250,500,500,5)
   edge4.visible=false
   
   
}

function draw(){
    background(0)
    
    block.bounceOff(edge1)
    block.bounceOff(edge2)
    block.bounceOff(edge3)
    block.bounceOff(edge4)



    if(keyDown("space")){
        block.velocityY=2
        block.velocityX=5   
    }
    
    if(block.isTouching(green)&& block.bounceOff(green)){
        block.shapeColor="green"
        sound.play()

    }

    if( block.isTouching(red)&& block.bounceOff(red) ){
        block.shapeColor="red"
        sound.play()

    } 
    else if(block.isTouching(blue)&& block.bounceOff(blue)){
        block.shapeColor="blue"
        sound.play()

    } 

    if( block.isTouching(yellow)&& block.bounceOff(yellow)){
        block.shapeColor="yellow"
        block.y=465
        block.velocityY=0
        block.velocityX=0
    sound.play()

        if(keyDown("space")){
            block.velocityY=2
            block.velocityX=5  
            block.y=50
            block.shapeColor="grey" 
        }
        
    } 

    drawSprites()
}
    
   
    
