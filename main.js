noseX=0;
noseY=0;
difference=0;
rightWrist=0;
leftWrist=0;

function setup(){

    video=createCapture(VIDEO);
    video.size(600,600);

    canvas=createCanvas(700,500);
    canvas.position(650,125);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose",gotPoses);
    
}

function modelLoaded(){
    console.log("This Model Is Loaded ");
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " +noseX + "  noseY = " +noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = Math.floor(leftWristX-rightWristX);
        console.log("leftWristX = "+leftWristX + "  rightWristX = " +rightWristX);
        console.log("difference = " +difference);
    }
}

    function draw(){
        canvas.clear();
        document.getElementById("square_side").innerHTML="Width And Height of a square is = " +difference+"px";
         fill('#ff99ff');
         stroke('#e6b3ff');
         square(noseX,noseY,difference);
    }