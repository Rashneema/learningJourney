class Journey{
    constructor(){
        
    }
    start(){
        this.spawnAlphabets(aImg);
        this.spawnAlphabets(bImg);
        this.spawnAlphabets(cImg);
        this.spawnAlphabets(dImg);
        this.spawnAlphabets(eImg);
        this.spawnAlphabets(fImg);
    }

    spawnAlphabets(img){
        if (frameCount%60===0){
        var alphabets = createSprite(random(0,width), 20);   
        alphabets.addImage(img);
        alphabets.velocityY = 10;
        alphabets.scale = 0.5;
        }
    }
   
}