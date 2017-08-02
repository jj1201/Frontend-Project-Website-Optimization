# Website Performance Optimization
### About the project
A website optimization project provided by [Udacity](https://www.udacity.com). The task is to optimize a given website so that it reaches a target score at PageSpeed Insights and have frames per second rate 60 fps or higher.

See the finished website:[Frontend-Project-Website-Optimization](https://jj1201.github.io/Frontend-Project-Website-Optimization/dist/)

### Part 1: PageSpeed Score
###### Target
Make index.html reach 90 or higher score for Mobile and Desktop at PageSpeed Insights.
###### Optimization
1. Inline style.css, add media query to print.css.
2. async analytics.js and scripts to load google fonts.
3. Compress pizzeria.jpg from 2.4MB to 70KB.
4. Using gulp, minimize the html, css, scripts and images files.

###### After above optimazions, the result is:
- Mobile: 96/100 
- Desktop: 97/100

### Part 2: Getting Rid of Jank
###### Target
- Make views/pizza.html reaches 60 frames per second rate when scrolling
- make time to resize pizzas less than 5ms.

See the finished website:[Pizza](https://jj1201.github.io/Frontend-Project-Website-Optimization/dist/views/pizza.html)
###### Optimization
1. Use timeline, spot two functions(*changePizzaSizes()*, *updatePositions()*) that have forced synchronous layout in them.
2. In changePizzaSizes(), get rid of the time consuming for loop by only caculating the newwidth once.
3. In updatePositions(), move the causing layout line out of the loop.

###### Result
- Time to generate last 10 frames :
    * **Before** : 29ms
    * **After** : 0.7ms
- Time to resize pizza :
    * **Before** : 98ms
    * **After** : 0.5ms

