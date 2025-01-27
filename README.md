# workshop_0
Website (LONELY CIRCLE WANTS TO BE FRIENDS WITH CURSOR): https://siennabienna.github.io/workshop_0/ 

## Things I Looked at in this Workshop
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

# Testing `mouseX` and `mouseY`, as well as `dist()`

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
# Experimenting with 2D Primitive Shapes

After my success with the circles, I wanted to try a slightly harder 2D primitive shape, so I had a go at using trianges. I had an idea to continue using `mouseX` and `mouseY`, and make it so that everytime a mouse is clicked, it would draw a triangle at that position. In order to do this, I had to try using the `mouseClicked` function.

I had a look at the `mouseClicked` page on the p5 reference.
https://p5js.org/reference/p5/mouseClicked/ 
This taught me that I needed to use it as a new function outside of `draw()`, and then I could add my triangle into this.

My first attempt was as follows:

```js
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

funtion mouseClicked(){
triangle(mouseX, mouseY, 20, 20, 20, 20);
}

```

But this did not work. After messing around with it a bit, I realised it was because the background was in the draw function from when I created the sketch, and this meant that everytime I clicked, the background would just reset and cover the line I made, as draw runs in a loop.

After taking this out, I ended up with this:
![image](https://github.com/user-attachments/assets/68e580d1-484f-4ce8-ad1f-e7e525f1f014)

Obviously these were not the triangles I was after. I had another look at the code and I noticed I had given the triangles fixed points on the canvas. To fix this, I needed to figure out the appropiate `mouseX` and `mouseY` for each coordinate, so that it moves to where the mouse it when it's clicked.

In order to figure this out, I put `mouseX` and `mouseY` as every coordinate, and then offset each of these by a certain number of pixels so that it would form a triangle. I left the first parameter as it was, so that it would maintain where the mouse was clicked. I changed the second parameter so that the X was increased by 40 pixels, and the Y was decreased by 40 pixels. This would form the second line of the triange. I changed the third parameter so that the X was increased by 40 again, and then the Y would also increase by 40, forming the final side of the triangle.

```js
funtion mouseClicked(){
triangle(mouseX, mouseY, mouseX + 40, mouseY - 40, mouseX + 40, mouseY + 40);
}
```
This worked really well!
Link to my p5 'tappy triangle': https://editor.p5js.org/siennabearbum/sketches/iKG6gj7o3 
