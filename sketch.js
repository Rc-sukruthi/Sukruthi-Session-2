var bg_img 
var playbutton, aboutbutton
var gameState = 'wait'

function preload(){
    bg_img = loadImage("assets/Splashscreen.gif");
}

function setup(){
    createCanvas(windowWidth, windowHeight)

    playbutton = createImg("assets/play_button.png");
    playbutton.position(600, 400);
    playbutton.size(300, 300);
    playbutton.hide();

  aboutbutton = createImg("assets/about_button.png");
    aboutbutton.position(750, 400);
    aboutbutton.size(300, 300);
    aboutbutton.hide();
}

function draw(){
    

    if(gameState === "wait"){
        background(bg_img)
        playbutton.show()
        aboutbutton.show()
    }
        aboutbutton.mousePressed(() => {
            playbutton.hide();
            aboutbutton.hide();
            gameState = "about";
    
        })
    
        if (gameState == "about") {
            aboutgame();
        }

        playbutton.mousePressed(() => {
            playbutton.hide();
            aboutbutton.hide();
            gameState = "play";
        })

        if (gameState == "play"){
            
        }
    

    drawSprites()

}

function aboutgame() {

    swal({
        title: "About Game === How to Play!!",
        text: "Swim in the sea and kill the obstacles which come near you!",
        textAlign: "center",
        imageUrl: "assets/Splashscreen.gif",
        imageSize: "200x200",
        confirmButtonText: "Lets Kill the Enemy!",
        confirmButtonColor: "blue",
    },
        function () {
            gameState = "wait"
        }

    )


}