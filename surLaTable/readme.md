# Goal

Create an 8x8 grid and make it so you can drag and drop each cell to rearrange the grid.  You can use any framework, and implement the solution via jsfiddle.

## Ideation: 
Instead of utilizing a library or set of libraries I challenged myself to write the solution with vanilla languages. I was really excited to learn the nuances of HTML5 and vanilla DOM manipulation. 
Inspiration for the swappable cards was from other UI's I have encountered, the square with rounded corners and the shadow boxing for added depth and feel. The under border as a good separator between content blocks. 

The color scheme is inspired by the one currently used on [SurLaTable.com](http://surLaTable.com). 

## Solution:   
The technologies used for this solution are vanilla JavaScript, (native)HTML5, and SCSS. I considered using flexbox, as part of the CSS solution, however I chose to utilize CSS grid since it seems to match the use case better.
As part of the planning I am familiar with both React.js and JQuery and the power of both of these libraries for DOM manipulation and targeting.  

The testing library being used to write unit tests is Jest

## Testing Checklist: 

Look & Feel:

   - Test for appearance like how does it look in IE, Chrome, etc. (Cross Browser support)
   - Test for accessibility so that your site is adopted for people with impaired vision (fonts, colors, contrast, etc)
   - Test for mobile devices layout
   - Test if it is comfortable to interact with the site using touch pad
   - Check for the proper favicon
   - Check for "error pages". Make sure they are no default and have the site common style.
   - If there are the forms check if the order of switching the field focus when user presses TAB is correct

Functionality:

- [x] Able to pick up element in 8 x 8 grid
- [x] Able to drag element 
- [x] Able to only drop element in/on other swappable elements within the 8 x 8 grid
- [x] If element dropped in 'gutters' or non-dropzone, return to original/previous placement and remove any animation effects
- [x] If currently holding the draggable element ensure user knows the point of origin and where it currently is hovering
- [x] Ensure there is a link to the documentation
