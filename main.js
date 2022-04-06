function setup(){
    video = createCapture(VIDEO);
  video.size(550, 500);
  canvas = createCanvas(550, 550);
  canvas.position(560, 100);
  poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on("poses", gotPoses);
}
function draw(){
    background('#696969');
}
function modelLoaded(){
    console.log("PoseNet is Initialized!");
}
function gotPoses(results){
    if(results > 0){
        console.log(results);
    }
}