var song, fft;
function setup() {
  createCanvas(1000,700, WEBGL);
  background(0)
  song = loadSound("La Cour - IAX_999992.mp3", loaded);
  fft = new p5.FFT(0.0001,16);
}

function loaded(){
    song.play();
    song.setVolume(0.4);
}

function draw() {
  //spectrum analyzer code
    var spectrum = fft.analyze();
      for (var i = 0; i< spectrum.length; i++){
        var x = map(i, 0, spectrum.lenth, 0, width);
        var h = -height + map(spectrum[i], 0, 255, height, 0);
    }
      //console.log used to see the array values,
      // from the soundfile "La Cour - IAX_999992"
        //console.log(spectrum.lenth);

  //3D-Shape: Cone, specified
    push();
      translate((x*rotateZ(random(frameCount * -0.01,frameCount * -0.0002)),
                (x, height, width / spectrum.length, h ) ),0);
      rotateY(frameCount * -0.01);
      rotateZ(frameCount * -0.01);
      //noStroke();
        var c = color(random(10,200), random(10,200), random(10, 200), 50);
        fill(c);
      cone(100,(x, height, width / spectrum.length, h ),
                2+(x, height, width / spectrum.length, h ),2);
        var value = alpha(c);
        fill(value)
        strokeWeight(0.5);
    pop();
}
