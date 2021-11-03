class Form
{
    constructor(){
        this.input = createInput("").attribute("placeholder", "ENTER YOUR NAME");
        this.button = createButton("Start");
        this.greeting = createElement("h2");
       this.button2 = createButton("Play");
       this.Abutton = createButton("Next");
       this.Bbutton = createButton("Next");
       this.Cbutton = createButton("Next");
       this.Dbutton = createButton("Next");
       this.Ebutton = createButton("Next");
       this.Fbutton = createButton("Next");
    }

    elementPositions() {
        this.input.position(width/2-100, height/2-100);
        this.button.position(width/2-85, height/2-20);
        this.greeting.position(width/2-100, height/2-100);
    }

    elementStyles() {
        this.input.class("customInput");
        this.button.class("customButton");
        this.button2.class("customButton");
        this.Abutton.class("customButton");
        this.Bbutton.class("customButton");
        this.Cbutton.class("customButton");
        this.Dbutton.class("customButton");
        this.Ebutton.class("customButton");
        this.Fbutton.class("customButton");
    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        this.button2.hide();
    }

    handleMousePressed(){
        this.button.mousePressed(() => {
           this.input.hide();
            this.button.hide();
            var message  = `
            Welcome ${this.input.value()} 
            </br>You will go through the learning journey
            </br>Then check your results by attending the quiz
            </br>HAPPY LEARNING!`
           this.greeting.position(width/2-100, height/2-100);
            this.button2.position(width/2-35, height/2+100);
            this.greeting.html(message);
        });

        this.button2.mousePressed(() => {
            form.hide();

            this.A = createImg("assets/A.png");
            this.A.position(width/2-200, height/2-350);
            this.A.size(400, 400);
            
            this.apple = createImg("assets/apple.png");
            this.apple.position(this.A.x, height/2-50);
            this.apple.size(400, 400);
        
            this.Abutton.position(width-200, height-70);
           
        });

        this.Abutton.mousePressed(() => {
            this.A.hide();
            this.apple.hide();

            this.B = createImg("assets/B.png");
            this.B.position(width/2-200, height/2-350);
            this.B.size(400, 400);
            
            this.ball = createImg("assets/ball.png");
            this.ball.position(this.B.x+50, height/2+50);
            this.ball.size(250, 250);
        
            
            this.Bbutton.position(width-200, height-70);
        });        

        this.Bbutton.mousePressed(() => {
            this.B.hide();
            this.ball.hide();

            this.C = createImg("assets/C.png");
            this.C.position(width/2-200, height/2-350);
            this.C.size(400, 400);
            
            this.cat = createImg("assets/cat.png");
            this.cat.position(this.C.x, height/2-45);
            this.cat.size(400, 400);
        
            
            this.Cbutton.position(width-200, height-70);

        });

        this.Cbutton.mousePressed(() => {
            this.C.hide();
            this.cat.hide();

            this.D = createImg("assets/D.png");
            this.D.position(width/2-200, height/2-350);
            this.D.size(400, 400);
            
            this.dog = createImg("assets/dog.png");
            this.dog.position(this.D.x-100, height/2-50);
            this.dog.size(700, 450);
        
            
            this.Dbutton.position(width-200, height-70);

        });

        this.Dbutton.mousePressed(() => {
            this.D.hide();
            this.dog.hide();

            this.E = createImg("assets/E.png");
            this.E.position(width/2-200, height/2-350);
            this.E.size(400, 400);
            
            this.egg = createImg("assets/egg.png");
            this.egg.position(this.E.x+50, height/2+10);
            this.egg.size(250, 250);
        
            
            this.Ebutton.position(width-200, height-70);

        });

        this.Ebutton.mousePressed(() => {
            this.E.hide();
            this.egg.hide();

            this.F = createImg("assets/F.png");
            this.F.position(width/2-200, height/2-350);
            this.F.size(400, 400);
            
            this.fish = createImg("assets/fish.png");
            this.fish.position(this.F.x, height/2-10);
            this.fish.size(300, 300);
        
            
            this.Fbutton.position(width-200, height-70);

        });

        this.Fbutton.mousePressed(() => {
            this.F.hide();
            this.fish.hide();

            gameState=1;

            drawSprites();
    
        });
    }

display(){
    this.elementPositions();
    this.elementStyles();
    this.handleMousePressed();

}




}