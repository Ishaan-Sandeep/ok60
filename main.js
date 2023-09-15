function setup() {
   canvas =  createCanvas(300,300)
   canvas.position(560,350)
   video = createCapture(VIDEO)
   video.size(300,300)
   posiffier = ml5.poseNet(video,modelLoaded)
   posiffier.on('pose',GotResults)
}
function draw() {
    background("lemonchiffon")
}
function modelLoaded() {
    console.log("Model Is Loaded!")
}
function GotResults(results) {
    if(results.length > 0) {
        console.log(results)
    }
}