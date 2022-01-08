var bg, bgImg,bgImg2
var kid, kidImg, gender, name
var score=0;
var trampImg,tramp
var mask, maskImg, vaccine,vaccineImg
var virus, virusImg
var invisibleGround
var TrampGrp, VaccineGrp, MaskGrp, VirusGrp,  DoorGrp, IbGrp
var gameState=0;


function preload(){
  
  
bgImg=loadImage("assets/beach.jpg")
bgImg2=loadImage("assets/desert.jpg")
trampImg=loadImage("assets/tr.png")
maskImg=loadImage("assets/mask.png")
vaccineImg=loadImage("assets/vaccine.png")
virusImg=loadImage("assets/virus.png")
kidImg=loadImage("assets/girl.png")





}
function setup() {
  createCanvas(displayWidth,displayHeight);
  bg=createSprite(width/2, height/2)
  bg.scale=3.3;
  bg.addImage(bgImg)

  kid=createSprite(100,100,50,20)
  kid.addImage(kidImg)
  kid.debug=true

  invisibleGround=createSprite(210,710,displayWidth/2,20)

  kid.collide(invisibleGround)

  TrampGrp=new Group()
  MaskGrp=new Group()
  VirusGrp=new Group()
  DoorGrp=new Group()
  VaccineGrp=new Group()
  IbGrp=new Group()
  
  
   if(gameState===0){
    swal({
      title: "Player Details",
      text: "Write Your Name:",
      type: "input",
      showCancelButton: true,
      closeOnConfirm: false,
      animation: "slide-from-top",
      inputPlaceholder: "Write Your Name"
    },
    function(inputValue){
      if (inputValue === null) return false;
      
      if (inputValue === "") {
        swal.showInputError("You need to write something!");
        return false
      }
      
      swal("Nice!", "You wrote: " + inputValue, "success");
      gameState=1
    });
  } 

  
}

function draw() {
  if(gameState===0){
   
  } 
  else if(gameState===1){
    bg.velocityY=+2
    //console.log(bg.y)
    if(bg.y>displayHeight-150){
    bg.y=displayHeight/2
    //console.log("going out")
    }
    spawnTrampoline()
    spawnMask()
    spawnVaccine()
    spawnVirus()
  } 
  else{

  }
  if(keyDown (LEFT_ARROW)){
    kid.x= kid.x-5
    }
 if(keyDown(RIGHT_ARROW)){
    kid.x= kid.x+5
    }
 if(keyDown ("space")){
    kid.velocityY=-5
    }
    //gravity//
   kid.velocityY = kid.velocityY + 0.8

   if(kid.isTouching(TrampGrp)){
    kid.velocity=0
   }
   if(kid.isTouching(IbGrp)) {
    bg.addImage(bgImg2)
   }
  drawSprites();

  text(mouseX+','+mouseY,mouseX,mouseY)
}


function spawnTrampoline(){
  if(frameCount %200===0){
    var tramp=createSprite(200,200,220,150)
   tramp.x= Math.round(random(100,800))
   tramp.debug=true
    //add image//
    tramp.addImage(trampImg)
    tramp.velocityY=+2
    tramp.scale=0.6;
    kid.depth=tramp.depth
    kid.depth+=1
    TrampGrp.add(tramp)
    var Ib=createSprite(200,300,tramp.width/2,2)
    Ib.x= tramp.x
    Ib.velocityY=tramp.velocityY
    Ib.visible=false;
    IbGrp.add(Ib)
  }
}
function spawnMask(){
  if(frameCount %450===0){
    var mask=createSprite(100,100,700,700)
   mask.x= Math.round(random(950,900))
    //add image//
    mask.addImage(maskImg)
    mask.velocityY=+2
    mask.scale=0.3;
    kid.depth=mask.depth
    kid.depth+=1
    MaskGrp.add(mask)
  }
}

function spawnVaccine(){
  if(frameCount %550===0){
    var vaccine=createSprite(50,50,600,600)
   vaccine.x= Math.round(random(500,100))
    //add image//
    vaccine.addImage(vaccineImg)
    vaccine.velocityY=+2
    vaccine.scale=0.3;
    kid.depth=vaccine.depth
    kid.depth+=1
    VaccineGrp.add(vaccine)
  }
}
   

function spawnVirus(){
  if(frameCount %600===0){
    var virus=createSprite(30,30,500,500)
   virus.x= Math.round(random(300,1000))
    //add image//
    virus.addImage(virusImg)
    virus.velocityY=+2
    virus.scale=0.2;
    kid.depth=virus.depth
    kid.depth+=1
    VirusGrp.add(virus)
  }
}


