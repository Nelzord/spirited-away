var max;
var drawMomo = false;
var momoX = -350;
var x;
var y;
var bat;
var rot;
var scl;
var doThing = false;
var doThis = false;
var xx= '#96D7D9'
var zx = 700
var zy = 50
var counter = 0;

function setup() {
	createCanvas(700,350);
	frameRate(35);
	max = 500;
	bat = random(0, 10)
	rot = random(PI/6, PI/4)

}

function draw() 
{    

	var count;
	var xLoc;
push();
	background (xx);	
	noStroke();
	fill('hsba(174, 17%, 89%, 0.8)');



	 




	xLoc=0;
	for (count = 0; count < max; count += 1)
	{
		ellipse(xLoc,random(75,200),random(0,90));
		xLoc += 9;
	}
	fill('hsba(174, 17%, 89%)');

	xLoc=0;
	for (count = 0; count < max; count += 1)
	{
		ellipse(xLoc,random(75,200),random(0,50));
		xLoc += 5;
	}
pop();

background1();
//noface();
push();
fill('black');
translate(0,300);
ellipse(250,0,200,600);
pop();
	if (drawMomo){
		momo(momoX);
		if (momoX<0) {
		   momoX= momoX+10 
		}
	} else {
		noface();
	}
push()
translate(250, 100)
scale(.5)
 drawBanana(50, 50, 3)
 drawSeeds(50,50, 3)

fill(50,30,50)
    rect(250,100,300,300)
    rect(300,400, 200,200)
    fill(250)
    ellipse(400, 250, 250, 250)
    strokeWeight(4)
    stroke(0)
    line(400, 250, 400, 150)
    line(400, 250, 450, 300)
    


    if (doThing) {
    
      drawface(50, 50 )
        for ( i = 0; i < 3; i ++){
        bar = random(-50, 50)
        bol = random(-50, 200)

        peytonsucks(bol, bar)
        bol++
        bar++

    }
    
          }


    if (doThis) {
    	drawLeaf(zx, zy, 1.1, rot, 1, 1)

    	counter++
    	
    	zx += -1
    	rot = rot + .1
    	zy = 6*(sin(counter))
    }

          pop()
}

function momo(x) {
push();
translate(x,0);
fill('white');
ellipse(250,100,100,150);
noFill();
stroke('black')
strokeWeight(5)
ellipse(220,90,35,35)
ellipse(280,90,35,35)
push();
beginShape();
	curveVertex(209,135);
	curveVertex(209,135);
	curveVertex(250,164);
	curveVertex(290,135);
	curveVertex(290,135);
endShape();
pop();
fill('black')
ellipse(220,90,18,18);
ellipse(280,90,18,18);
strokeWeight(2);
push();
	beginShape();
	translate(5,8)
		curveVertex(242,126);
		curveVertex(242,126);
		curveVertex(238,126);
		curveVertex(237,132);
		curveVertex(240,130);
	endShape();
	beginShape();
		curveVertex(247,126);
		curveVertex(247,126);
		curveVertex(251,126);
		curveVertex(250,132);
		curveVertex(250,130);
	endShape();
pop();

pop();


}


function noface() {
fill('white');
ellipse(250,100,100,150);
fill('black');
ellipse(217,93,25,14);
ellipse(282,93,25,14);

//eye thingy
push();
stroke('black');
strokeWeight(3);
noFill();
beginShape();
curveVertex(208,103);
curveVertex(208,103);
curveVertex(218,106);
curveVertex(228,103);
curveVertex(228,103);
endShape();
noFill();
beginShape();
curveVertex(273,103);
curveVertex(273,103);
curveVertex(283,106);
curveVertex(293,103);
curveVertex(293,103);
endShape();
line(239,139,262,139)
pop();

//triangles
push();
	noStroke();
	fill('#B48787');
	beginShape();
	vertex(210,83);
	vertex(223,83);
	vertex(220,55);
	endShape();
	beginShape();
	vertex(275,83);	
	vertex(288,83);
	vertex(278,55);
	endShape();
	beginShape();
	vertex(210,110);
	vertex(223,110);
	vertex(218,141);
	endShape();
	beginShape();
	vertex(278,110);
	vertex(290,110);
	vertex(280,141);
	endShape();
pop();
}


function background1() {
//bushes back
noStroke();
fill('#4B6E82');
ellipse(561,261,60,60);
ellipse(590,244,60,90);
ellipse(623,262,95,95);
ellipse(654,249,120,40);
ellipse(682,247,95,105);

//backmountain
push();
	noStroke();
	fill('#5B5360');
	beginShape();
	vertex(543,256);
	vertex(536,253);
	vertex(598,258);
	vertex(650,249);
	vertex(702,247);
	vertex(722,358);
	vertex(537,363);
	vertex(0,363);
	endShape();
pop();

//bushes
push();
	translate(0,30);
	noStroke();
	fill('#7EB25F');
	ellipse(0,161,80,120);
	ellipse(30,134,50,50);
	ellipse(60,144,90,150);
	ellipse(140,162,95,125);
	ellipse(210,149,120,120);
	ellipse(310,147,105,125);
	ellipse(397,133,100,125);
	ellipse(460,140,70,90);
pop();
//mountain
noStroke();
fill('#D2C1B1');
beginShape();
vertex(0,350);
vertex(0,202);
vertex(0,202);
vertex(24,205);
vertex(82,206);
vertex(99,206);
vertex(110,208);
vertex(153,212);
vertex(176,208);
vertex(216,203);
vertex(231,192);
vertex(254,202);
vertex(276,202);
vertex(284,196);
vertex(327,210);
vertex(344,199);
vertex(360,197);
vertex(375,202);
vertex(410,195);
vertex(422,194);
vertex(512,203);
vertex(523,205);
vertex(534,219);
vertex(543,258);
vertex(551,297);
vertex(553,332);
vertex(554,350);
endShape();

//bridgefloor
noStroke();
fill('#BA9D7F');
push();
	translate(30,370);
	rotate(275);
	ellipse(0,0,200,1000);
pop();

//bridge
push();
	stroke('#B74141');
	strokeWeight(16);
	noFill();
	beginShape();
	curveVertex(0,168);
	curveVertex(0,168);
	curveVertex(240,167);
	curveVertex(441,187)
	curveVertex(543,207);
	curveVertex(700,249);
	curveVertex(700,249);
	endShape();
	//middle curve
push();
	translate(0,10)
	beginShape();
	curveVertex(0,213);
	curveVertex(0,213);
	curveVertex(144,222);
	curveVertex(288,235);
	curveVertex(451,262);
	curveVertex(700,339);
	curveVertex(700,339);
	endShape();
pop();
	//bottom curve
	beginShape();
	curveVertex(0,271);
	curveVertex(0,271);
	curveVertex(105,283);
	curveVertex(234,303);
	curveVertex(306,316);
	curveVertex(444,355);
	curveVertex(444,355);
	endShape();
	//line thingy
	line(17,171,17,272);
	line(80,170,78,274);
	line(168,169,168,286);
	line(255,180,255,304);
	line(337,185,337,324);
	line(423,189,423,338);
	line(522,202,523,348);
	line(618,232,620,363);
	//small line
	strokeWeight(8);
	line(44,225,44,273);
	line(122,232,122,283);
	line(211,242,211,297);
	line(292,252,292,308);
	line(375,265,375,339);
	line(472,284,472,349);
	line(567,310,567,350);
	line(665,338,665,356);
pop();
}

function mouseClicked(){
	if(mouseX < 250){
		momoX = -250;
		drawMomo = !drawMomo;
	}
}

function mousePressed()
{
   if ((mouseX-400)*(mouseX-400) + (mouseY-250)*(mouseY-250) - 125*125 < 0)
   {
       doThing = !doThing;
   }else{

   if (mouseY < 50){
		doThis = !doThis;
	}
}
}




function drawBanana(x, y, scl){

  push()
  scale(scl)
  strokeWeight(6)
  stroke(34,139,34)
  translate(x, y)
  fill(252, 108, 133)
  beginShape()
  curveVertex(249, 35)
  curveVertex(250, 35)
  curveVertex(150, 100)
  curveVertex(50, 100)
  curveVertex(0, 50)
  endShape(CLOSE)
  strokeWeight(0)
    pop()
  
}


function drawSeeds(x, y, scl)
{
  push()
  scale(scl)
  translate((x+115), (y+50-300))
  strokeWeight(0)
  fill(0)
  for (i = 0; i < 3; i++){
     ellipse(bat, 30, 5, 20)
     rotate(rot)
  }
  pop()
}


function peytonsucks(x, y){
  translate(x,y+200)
  fill(200, 200, 30)
  strokeWeight(2)
  triangle(30, 75, 58, 20, 86, 75)
  triangle(30, 40, 58, 95 , 86, 40 )
}



function drawface(x, y){
  translate(x,y-300)
  push()

  fill(255)
  strokeWeight(2)

  ellipse(400, 430, 30, 30)
  ellipse(300, 430, 30, 30)
  fill(0)
  ellipse(300, 430, 10)
  ellipse(400, 430, 10)
  ellipse(350, 580, 30, 80)
  pop()
}


function drawLeaf(x, y, scl, rot, dx, dy){
scale(scl)
push()
scale(scl)
translate(x, y)
rotate(rot)
fill(35, 170, 40)
ellipse(0, 0, 50, 20)
strokeWeight(3)
line(-25, 0, 50, 0)
scale(scl)
pop()
scale(scl)
}
