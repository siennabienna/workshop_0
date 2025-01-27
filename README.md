# workshop_0
Website (LONELY CIRCLE WANTS TO BE FRIENDS WITH CURSOR): https://siennabienna.github.io/workshop_0/ 

## Things I Looked At In This Workshop
- Learning setup and draw funcions
- Trying out RGB
- Testing `mouseX` and `mouseY`
- Testing distance function
- Experimenting with 2D primitive shapes


# Learning Setup and Draw Functions

In the first workshop, we were shown the basics of p5.js. The difference between setup and draw, and that draw always runs in a loop. We also learned simple shapes, such as rectangles `rect(x, y, w, h);`, and circles `circle(x, y, diameter);`. I followed along with the workshop and had a play around on p5. 

Here, I am trying out the RGB of the background, and also have made a rectangle.

```js
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220, 10, 300);
  rect(100, 100, 100);
}

```
![image](https://github.com/user-attachments/assets/2f48b25e-263d-42b2-b9a2-98c81ff306c5)


Here, I am trying more RGBs, as well as the stroke and fill.

```js
function draw() {
  background(220, 10, 300);

  stroke(255, 200, 7);
  fill(330, 4, 90);

  rect(100, 100, 100, 40);
}

```
![image](https://github.com/user-attachments/assets/3ab5776b-9396-498e-af77-b3f78ad388bf)

# Testing `mouseX` And `mouseY`

I was really interested in the mouseX and mouseY functions, and trying to make something interactive. 

My plan was to draw a circle that is as big as the mouse is far from the centre. I started by putting the circle in the centre, and then I needed to find the distance between the center and the mouse. For this I used `mouseX` and `mouseY`, and put these as the x and y varibles in the `dist()` function. 

```js
let d = dist(mouseX, mouseY, 200, 200);

```
This would calculate how far out the mouse was. I then put `dist()`, or d, as a varible in the size of the circle. This worked well, and the circle was following the mouse. However, the circle would only grow half as big as the mouse was far. I then realised that I needed radius for the dist to follow the mouse correctly, and the circle shape uses diameter.

I found this out by looking at the p5 reference page for `circle()`

https://p5js.org/reference/p5/circle/ 

To fix this, I multiplied the variable in the code.

```js
stroke(173, 255, 47, 240);
fill(255, 105, 180);

circle(200, 200, d*2);

```


