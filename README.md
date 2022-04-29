# LandingPage - Project

The main structure was created by udacity.
I just add another backgroundcolor(css) and fill out the app.js with functions, eventListeners, etc.
The project have 4 sections.
The NavigationBar is created dynamically (JavaScript).
The project is responsive, that means you can check it out on every device.

## Nav-Bar 
Creating the Nav-Bar... I write a function with a for-loop
that will grab the sections by ID and dataNav (naming).
In this loop, that create an element ('li'), with a link (class, href), by using appendChild.
It automatically create a new menu element if you add another section to the HTML.

  
## Active sections
When you scroll through the sections or use the menu, they get active.
You will see a background animation.
I decide to use "IntersectionObserver", because it's calculate on their when the section is on the screen.
Threshold have the value 0,5 (50%).
If I set the value at 1 (100%) you would see two sections would be active.

## Highlighting the Navigation
  The menu links get highlighted when you click them.
  Here I used jQuery.


**It is a project for the Udacity Nanodegree.**

