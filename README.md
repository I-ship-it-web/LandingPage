# <h1>LandingPage- Project</h1>

<p>The main structure was created by udacity.</br> I just add another backgroundcolor(css) and fill out the app.js with functions, eventListeners, etc.</p>
<p>The project have 4 sections.</p>
<p>The NavigationBar is created with dynamically <em>(JavaScript)</em>.
</p>

<h2>Nav-Bar</h2>
<p> Creating the Nav-Bar... I write a function with a for-loop
  that will grab the sections by <em>ID</em> and <em>dataNav</em> (naming).</br>
  In this loop, that create an element ('li'), with a link (class, href), by using appendChild.</br>
  It automatically create a new menu element if you add another section to the HTML.
</p>
  
<h2>Active sections</h2>
<p>When you scroll through the sections or use the menu, they get active.</br>
You will see a background animation.</br>
I decide to use "<em>IntersectionObserver</em>", because it's calculate on their when the section is on the screen.</br>
<em>Threshold</em> have the value 0,5 (50%).</br> If I set the value at 1 (100%) you would see two sections would be active.</p>
<hr>
<b>It is a project for the Udacity Nanodegree.</b>
