/**
This script will inject the global header into the #gheader div of each page
**/

const INJECTION ='<div id="global-preheader"><h1>Logans site</h1></div><div id="global-header"><ul id="nav-list"><li><a href="/wrenn">Home</a></li><li>Photos<ul><li><a href="/wrenn/photo-albums">album 1</a></li><li><a href="#">album 2 </a></li><li><a href="#">album 3</a></li></ul></li><li>Projects <ul><li><a href="/wrenn/art-projects">album 1</a></li><li><a href="#">album 2</a></li><li><a href="#">album 3</a></li></ul></li><li> music<ul><li><a href="/wrenn/music">album 1</a></li><li><a href="#">album 2</a></li><li><a href="#">album 3</a></li></ul></li><li><a href="/wrenn/web-dev">Web Development</a<ul><li><a href="/wrenn/wdsub/week1.html">week 1</a></li><li><a href="/wrenn/wdsub/recipe.html">Week 2</a></li><li><a href="/wrenn/wdsub/anchors.html">week 3</a></li><li><a href="wrenn/wdsub/poem.html">week 4</a></li><li><a href="wrenn/wdsub/reviews.html">week 5</a></li><li><a href="wrenn/wdsub/journal.html">week 6</a></li><li><a href="wrenn/wdsub/band-page.html">week 7</a></li><li><a href="wrenn/wdsub/list-maker.html">week 8</a></li><li><a href="#">week 9</a></li></ul></li></ul></div>';

let _div = document.getElementById("gheader");

_div.innerHTML = INJECTION;
