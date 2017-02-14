## Website Performance Optimization portfolio project

This is the final product of Udacity's web optimization project. In this document, I will explain how to run the project, and then explain what I did to fix the optimization issues.

## How to Run

simply click on this URL:  https://nickvallee.github.io/web-optimize-project/

##My Optimization Process

I took this project as an opportunity to get practice with the tools such as **gulp** and **grunt**, so much of my time was spend making these packages actually work.  I ran the project through a gulp styles and gulp script task, piping the files through to a **temp** folder.  I also used gulp-responsive to reduce the size of the website's images.
After this, I ran the project through a gulp build task that used **minify** and **uglify** to optimize my CSS and JS files.
I also set up a grunt-critical task to inline render blocking CSS.
In order to prevent render-blocking Javascript, I added async and defer tags where appropriate, and also restructured the code in main.js to prevent jank in the moving pizzas. I also eliminated the repeating code so that the pizza slider would function faster.
The end result is located in the docs folder.