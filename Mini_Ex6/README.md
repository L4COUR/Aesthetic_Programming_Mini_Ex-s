# Mini_Ex6:
**Objective:**
Implement a rule-based generative program, by using loops and conditional statements to strengthen computational comprehendsion. Further more to reflect upon the concept of generativity in a theoretical and practical sense, concerning subjects such as rules, temporality, authorship, emergence and processes.

### AudioGEN.js
**The Techno_obj concept:**

I have with this mini_ex5 gone with a much simpler idea compared to my previous excercises. This is mostly due to the fact that I currently am working on a electronic music performance, but also because I find that sometimes "less is more". I saw this excersie as an oppertunity to make something very simplistic and really try to figure most of it out, without Daniel Shiffman's tutorials to guide me. I really enjoy programmming in this more minimalistic envoirment. using only one simple shape and just a few other functions and then try to figure out how to overcome the limitations of what i have. I find that working this way makes the process a lot more interesting, because it more than often is necessary to think creatively with the tools at hand. So I knew from the beginning that I wanted to create an object which would be class-based, but all of it's properties came as I progressed through the excersise. I also wanted to use sound, and try to mix the concept of sound with the concept of object. the combination of these to concepts made me realize the objectification of techno. I wanted the object to be somewhat deppendent on the sound, so the size is defined by ```p5.PeakDetect``` which analyzing the peak's in the audio, and the rotation is controlled by the ```tech.currentTime()``` which uses the time of an audio file. 
</br>
![alt text](https://github.com/L4COUR/Aesthetic_Programming_2018/blob/master/Mini_Ex6/Screen%20Shot%202018-03-20%20at%2001.08.40.png "AudioGEN.js")
</br>
Before pressing [RawGit](https://cdn.rawgit.com/L4COUR/Aesthetic_Programming_2018/f390cc2b/Mini_Ex5/Source/index.html) I would once again strongly advice to use a set of headphones for a better experience of the panned audio-signals.
</br>

**Object Orientation in digital Culture:**

I think that Object Oriented Programming (OOP) is a very powerful way of programming, in the sense that it makes it a lot easier to keep oversieht of all the different objects that are used in the code, and also manipulating them simultaniously through variables and so forth. However I also see it as a container, a way to keep your code organized, and while this is important, I also think that it is a part of a culture of programming thats more concerned with the notion of JIT and efficiancy which is exactly what p5.js is oposing. I find that the OOP way of programming is more difficult and a little less intuitive, but I think I will get the hang of it eventually. It is afterall a pretty big step from a classical paradigm to the object-oriented paradigm, changing a very fundamental way in how to code. This concept of modular programming can be hard to grasp at first, and really seeing the point in why you as an aestchetic programmer need to know about this particular way of programming. it is however a very usefull concept, and one that will make a lot of tediuos coding disapear, so you can spent the time programming something more interesting.   

**The Code:**

```javascript
var kick, tech, fft; //Sound varibles

function preload(){
  kick = loadSound('La Cour - Inside Computers Minds (Original).mp3'); //loading a sample with 4/4 kick drum pattern
  fft = new p5.FFT(0.8,16);
}

function setup() {
createCanvas(600,600);
background(255);

kick.play();
kick.amp(1);

}

function draw() {
//background(255);
strokeWeight(1);
stroke(2);
//noFill();

//spectrum analyzer code
  var spectrum = fft.analyze();
    for (var i = 0; i< spectrum.length; i++){
      var x = map(i, 0, spectrum.length, 0, width);
      var h = -height + map(spectrum[i], 0, 255, height, 0);
  }

for (var x = 0; x <= width; x += 100) {
  for (var y = 0; y <= height; y += 20){
    //rect(x,y,5,5+h);
    push();
    rotate(-frameCount/ x*100)
     translate(random(0,width/2),height/2);
     rotate(frameCount/ x*10)
       push();
         rectMode(CENTER)
         rect(x,y, h/x*4, h/y*4);
         //rect(y/2,x/2, h/x, h/y);
       pop();
   pop();
  }
}

}
```

