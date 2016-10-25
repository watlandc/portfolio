/*------------------------------------*\
  #SLIDES
\*------------------------------------*/

var slides = [
  {
    'id': 'slide--2',
    'image': '//dl.dropboxusercontent.com/s/tnh3pof72a79kmx/Screenshot%202016-10-20%2022.38.34.png?raw=1',
    'icon': 'account_circle',
    'description': 'About dialog',
    'url': '//watlandc.github.io/web-components/dialogs/about.html'
  },
  {
    'id': 'slide--3',
    'image': '//dl.dropboxusercontent.com/s/kjgppo9s47tv8a3/Screenshot%202016-10-20%2021.51.23.png?raw=1',
    'icon': 'view_headline',
    'description': 'Accordion',
    'url': '//watlandc.github.io/web-components/dialogs/accordion.html'
  },
  {
    'id': 'slide--4',
    'image': '//dl.dropboxusercontent.com/s/av5gk01d6e31up6/Screenshot%202016-10-20%2022.50.26.png?raw=1',
    'icon': 'contact_mail',
    'description': 'Business card',
    'url': '//watlandc.github.io/web-components/dialogs/business-card.html'
  },
  {
    'id': 'slide--5',
    'image': '//dl.dropboxusercontent.com/s/zokw5ocu32o9nti/Screenshot%202016-10-20%2022.22.25.png?raw=1',
    'icon': 'library_books',
    'description': 'Book library',
    'url': '//watlandc.github.io/books-modern-developer/'
  },
  {
    'id': 'slide--6',
    'image': '//dl.dropboxusercontent.com/s/l0q1gxmj45mf7x3/Screenshot%202016-10-20%2022.23.59.png?raw=1',
    'icon': 'exposure_plus_2',
    'description': 'Calculator',
    'url': '//watlandc.github.io/web-components/calculator/calculator.html'
  },
  {
    'id': 'slide--8',
    'image': '//dl.dropboxusercontent.com/s/par6qpe5zfu78nl/Screenshot%202016-10-20%2022.40.42.png?raw=1',
    'icon': 'insert_chart',
    'description': 'Chart',
    'url': '//watlandc.github.io/web-components/dialogs/graph.html'
  },
  {
    'id': 'slide--9',
    'image': '//dl.dropboxusercontent.com/s/3k8zcijz5zzu2fv/Screenshot%202016-10-20%2022.29.55.png?raw=1',
    'icon': 'lock_outline',
    'description': 'Login form',
    'url': 'https://watlandc.github.io/web-components/dialogs/login.html'
  },
  {
    'id': 'slide--10',
    'image': '//dl.dropboxusercontent.com/s/ubcfnt18jl9ty6a/Screenshot%202016-10-20%2022.32.56.png?raw=1',
    'icon': 'view_list',
    'description': 'Product listing',
    'url': '//watlandc.github.io/web-components/index.html'
  },
  {
    'id': 'slide--11',
    'image': '//dl.dropboxusercontent.com/s/2li0mnxd6izxkk9/Screenshot%202016-10-20%2022.34.05.png?raw=1',
    'icon': 'create',
    'description': 'Signup form',
    'url': '//watlandc.github.io/web-components/dialogs/sign-up.html'
  },
  {
    'id': 'slide--12',
    'image': '//dl.dropboxusercontent.com/s/6452qjpl1t3t1u8/Screenshot%202016-10-20%2022.45.39.png?raw=1',
    'icon': 'local_shipping',
    'description': 'Shipping form',
    'url': '//watlandc.github.io/web-components/dialogs/shipping.html'
  },
  {
    'id': 'slide--13',
    'image': '//dl.dropboxusercontent.com/s/dvlhvujep7pl15i/Screenshot%202016-10-20%2022.47.08.png?raw=1',
    'icon': 'shopping_cart',
    'description': 'Shopping cart',
    'url': '//watlandc.github.io/web-components/dialogs/cart.html'
  },
  {
    'id': 'slide--14',
    'image': '//dl.dropboxusercontent.com/s/w7fhgqrzpk8umhz/Screenshot%202016-10-20%2022.49.04.png?raw=1',
    'icon': 'question_answer',
    'description': 'Questionaire',
    'url': '//watlandc.github.io/web-components/dialogs/questionaire.html'
  },
  {
    'id': 'slide--15',
    'image': '//dl.dropboxusercontent.com/s/k56p9mlcxqihj7t/Screenshot%202016-10-19%2022.16.52.png?raw=1',
    'icon': 'build',
    'description': 'Web components',
    'url': '//watlandc.github.io/web-components/components/components.html'
  }
];







/*------------------------------------*\
  #DISPLAY-MENU-ITEMS
\*------------------------------------*/

for (var i = 0; i < slides.length; i++) {
  var menuItemTemplate = document.querySelector(".js-menu-item-template").content.cloneNode("true");
  menuItemTemplate.querySelector(".js-menu__item").href = slides[i].url;
  menuItemTemplate.querySelector(".menu__icon").innerHTML = slides[i].icon;
  menuItemTemplate.querySelector(".menu__text").innerHTML = slides[i].description;
  document.querySelector(".js-menu").appendChild(menuItemTemplate); 
}






/*------------------------------------*\
  #DISPLAY-CAROUSEL-CONTENT
\*------------------------------------*/

for (var i = 0; i < slides.length; i++) {

  // display input fields
  var inputTemplate = document.querySelector(".js-carousel__input-template").content.cloneNode(true);
  inputTemplate.querySelector(".js-carousel__input").setAttribute("id", slides[i].id);
  document.querySelector(".js-carousel").insertBefore(inputTemplate, document.querySelector(".js-carousel__nav"));

  // display carousel content
  var carouselTemplate = document.querySelector(".js-carousel-template").content.cloneNode(true);
  // carouselTemplate.querySelector(".carousel__input").setAttribute("id", slides[i].id);
  carouselTemplate.querySelector(".js-phone__screen").style.backgroundImage = "url(" + slides[i].image + ")";
  carouselTemplate.querySelector(".js-carousel__icon").innerHTML = slides[i].icon;
  carouselTemplate.querySelector(".js-carousel__headline").innerHTML = slides[i].description;
  document.querySelector(".js-carousel").insertBefore(carouselTemplate, document.querySelector(".js-carousel__nav"));
  // document.querySelector(".js-carousel").appendChild(carouselTemplate);

  // display pagination
  var paginationTemplate = document.querySelector(".js-pagination-dot-template").content.cloneNode(true);
  paginationTemplate.querySelector(".js-pagination-dot").setAttribute("for", slides[i].id);
  document.querySelector(".js-pagination-dots").appendChild(paginationTemplate);

}





/*------------------------------------*\
  #COOKIE-ONBOARDING-EXPERIENCE
\*------------------------------------*/

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {

  var visitedStatus = getCookie("visited");
  if (visitedStatus != "") {
    // document.querySelector(".js-prompt").classList.add("is-hidden");
    document.querySelector(".js-carousel__background").classList.add("is-hidden");
    document.querySelector(".js-empty-state__search-text").classList.remove("is-hidden");
  } 
} 
checkCookie();






/*------------------------------------*\
  #CAROUSEL-NAVIGATION
\*------------------------------------*/

var carouselInputs = document.querySelectorAll(".js-carousel__input");

function moveForward() {

  for (var i = 0; i < carouselInputs.length; i++) {
    if (carouselInputs[i].checked && i === carouselInputs.length - 1) {
      // close carousel
      document.querySelector(".js-carousel__background").classList.add("is-hidden");
      // reset to last slide for browser back
      carouselInputs[0].checked = true;
      // display feature discovery
      displayPrompt();
      // set cookie on first visit
      setCookie("visited", "yes", 1);
    }
    if (carouselInputs[i].checked && i < carouselInputs.length - 1) {
      carouselInputs[i + 1].checked = true;
      break;
    }
  }
}
function moveBackward() {
  for (var i = 0; i < carouselInputs.length; i++) {
    if (carouselInputs[i].checked && i > 0) {
      carouselInputs[i - 1].checked = true;
    }
  }
}






/*------------------------------------*\
  #FEATURE-DISCOVERY
\*------------------------------------*/

// display feature discovery prompt
function displayPrompt() {
  var promptTemplate = document.querySelector(".prompt__template");
  document.querySelector(".js-search__prompt-target").appendChild(promptTemplate.content.cloneNode("true"));
  document.querySelector(".js-btn--search__prompt--target").appendChild(promptTemplate.content.cloneNode("true"));
}

// dismiss feature discovery prompt
function dismissPrompt() {
  var prompt = document.querySelectorAll(".js-prompt");
  for (var i = 0; i < prompt.length; i++) {
    prompt[i].classList.add("is-hidden");
  }
  document.querySelector(".js-empty-state__search-text").classList.remove("is-hidden");
}
// dismiss prompt and enter search focus
function touchTarget() {
  dismissPrompt();
  enterSearchState();
}






     