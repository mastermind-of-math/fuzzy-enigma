function preload(){
    //ABSOLUTELY NOTHING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
}

function setup(){
    var infinty = 600;
    canvas = createCanvas(infinty, infinty-100);
    canvas.position(100, 300);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    noStroke()
    fill(0, 255, 0);
    rect(50, 50, 500, 400);
    fill(255, 255, 255);
    rect(75, 75, 450, 350);
    image(video, 88.5, 88.5, 425, 325);
    fill(255, 0, 0);
    ellipse(62.5, 62.5, 75, 75);
    ellipse(537.5, 62.5, 75, 75);
    ellipse(62.5, 437.5, 75, 75);
    ellipse(537.5, 437.5, 75, 75);
}

function take_snapshot(){
    save("image3294.png");
}