# workshop_0

#### In the first workshop, we were shown the basics of p5.js. The difference between setup and draw, and that draw always runs in a loop. We also learned simple shapes, such as rectangles (rect(x, y, w, h);), and circles (x, y, diameter);). I followed along with the workshop and had a play around on p5. 

##### Here, I am trying out the RGB of the background, and also have made a rectangle.
![Screenshot 2025-01-09 215948](https://github.com/user-attachments/assets/4ab24925-6ebd-4fa9-b0fd-b3711b77ea26)

##### Here, I am trying more RGBs, as well as the stroke and fill.
![Screenshot 2025-01-09 220621](https://github.com/user-attachments/assets/18358a7c-6b7b-4811-84aa-e0fe4d18ed93)

#### I was really interested in the mouseX and mouseY functions, and trying to make something interactive. 
##### My plan was to draw a circle that is as big as the mouse is far from the centre. I started by putting the circle in the centre, and then I needed to find the distance between the center and the mouse. For this I used mouseX and mouseY, and put these as the x and y varibles in the dist() function. ![Screenshot 2025-01-16 150942](https://github.com/user-attachments/assets/2816036d-ce65-4952-a14b-359b5f2edbee)

##### This would calculate how far out the mouse was. I then put dist, or d, as a varible in the size of the circle. This worked well, and the circle was following the mouse. However, the circle would only grow half as big as the mouse was far. I then realised that I needed radius for the dist to follow the mouse correctly, and the circle shape uses diameter.
![image](https://github.com/user-attachments/assets/1512afe2-c783-4e99-844c-13c97db55ace)
##### To fix this, I multiplied the variable in the code.
![image](https://github.com/user-attachments/assets/06b4ebb5-bbbb-4762-b1bf-99b37535eb23)

### I am very proud of my expanding circle!


