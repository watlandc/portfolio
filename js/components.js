/*------------------------------------*\
  #APP-BAR-SEARCH-STATE
\*------------------------------------*/

// enter search state using search input
document.querySelector(".js-search").addEventListener('click', function() {
  enterSearchState();
});

// enter search state using the search button
document.querySelector(".js-btn--search").addEventListener('click', function() {
  enterSearchState();
});

// enter search state
function enterSearchState() {
  // enter app bar search state
  document.querySelector(".js-app-bar").classList.add("app-bar--search");
  // increase elevation on search focus
  document.querySelector(".js-search").classList.add("search--focus");
  // add input focus
  document.querySelector(".js-search-input").focus();
  // hide body content when searching
  document.querySelector(".js-content").classList.add("is-hidden");
}

// exist search state using back button
document.querySelector(".js-buttons-inline--left").addEventListener('click', function() {
  exitSearchState();
});

// exit search state
function exitSearchState() {
  // exit app bar search state
  document.querySelector(".js-app-bar").classList.remove("app-bar--search");
  // clear search input
  document.querySelector(".js-search-input").value = "";
  // display main content
  document.querySelector(".js-content").classList.remove("is-hidden");
  // lower elevation on search blur
  document.querySelector(".js-search").classList.remove("search--focus");
};






/*------------------------------------*\
  #NAVIGATION-DRAWER
\*------------------------------------*/

document.querySelector(".js-menu-button").addEventListener("click", function(e) {

  var windowWidth = window.innerWidth;
  console.log(windowWidth);
  var drawer = document.querySelector(".js-drawer");
  var drawerContent = document.querySelector(".js-content");
  var drawerTransparency = document.querySelector(".js-drawer__transparency");

  // toggle mobile drawer < 750px
  
  if (windowWidth <= 750) {
    // remove close flag added by mobile close
    drawer.classList.remove("is-closed--mobile", "is-closed--desktop");
    drawer.classList.add("is-open--mobile");
    // hide margin so media query doesn't open it
    drawerContent.classList.add("is-no-margin");
    // add background click target to close
    drawerTransparency.classList.add("drawer__transparency");
  }
  // toggle side nav > 750
  if (windowWidth > 750) {
    // was mobile close used?
    if (drawer.classList.contains("is-closed--mobile")) {
      // if so remove it
      drawer.classList.remove("is-closed--mobile");
      // remove margin hide class created by mobile open
      drawerContent.classList.remove("is-no-margin");
    // if mobile close wasn't added toggle drawer
    } else {
      drawer.classList.toggle("is-closed--desktop");
      drawerContent.classList.toggle("is-no-margin");
    }
  }
});

// close mobile drawer
document.querySelector(".drawer__title-bar").addEventListener("click", function(e) {
  
  var drawer = document.querySelector(".js-drawer");
  var drawerTransparency = document.querySelector(".js-drawer__transparency");
  // Click back arrow to close mobile drawer
  drawer.classList.add("is-closed--mobile");
  drawer.classList.remove("is-open--mobile");
  drawerTransparency.classList.remove("drawer__transparency");
});
document.querySelector(".js-drawer__transparency").addEventListener("click", function(e) {
  
  var drawer = document.querySelector(".js-drawer");
  // Click transparent background to close mobile drawer
  drawer.classList.add("is-closed--mobile");
  drawer.classList.remove("is-open--mobile");
  this.classList.remove("drawer__transparency");
});



/*------------------------------------*\
  #SELECTION-CONTROLS
\*------------------------------------*/

// State dropdown
// var states = "AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI WY";
// states = states.split(" ");

// var select = document.getElementById("state");

// for (var i = 0; i < states.length; i++) {
//   var option = document.createElement("option");
//   option.text = states[i];
//   select.add(option);
// }

// Set today as the minimum date
// var date = new Date();

// var day = date.getDate();
// var month = date.getMonth() + 1;
// var year = date.getFullYear();

// if (month < 10) month = "0" + month;
// if (day < 10) day = "0" + day;

// var today = year + "-" + month + "-" + day;       
// document.getElementById("date").min = today;



// Set time value as today
// var date = new Date();

// var day = date.getDate();
// var month = date.getMonth() + 1;
// var year = date.getFullYear();

// if (month < 10) month = "0" + month;
// if (day < 10) day = "0" + day;

// var today = year + "-" + month + "-" + day + "T00:00";       
// document.getElementById("date").value = today;







