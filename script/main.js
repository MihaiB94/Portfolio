$(document).ready(function () {
  document.getElementsByTagName('html')[0].style.visibility = 'visible';
});

const openAboutBtn = document.querySelector('.about__btn');
const closeAboutBtn = document.querySelector('.close__modal');

// const modal = document.querySelector('.modal');
const navAbout = document.getElementById('about');
const body = document.querySelector('body');

//---------------------- SCROLL TOP BUTTON -----------------///
const scrollButton = document.querySelector('.scroll-top');
// scroll TOP Button Events
if (scrollButton) {
  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > window.innerHeight * 0.8) {
      scrollButton.style.display = 'flex';
    } else {
      scrollButton.style.display = 'none';
    }
  });
  scrollButton.addEventListener('click', () => {
    window.scrollTo(0, 0);
  });
}
//----------------------END SCROLL TOP BUTTON -----------------///

// -----------------------Smooth scrolling--------------------------/////
// $(document).ready(function () {
//   // Add smooth scrolling to all links
//   $('a').on('click', function (event) {
//     // Make sure this.hash has a value before overriding default behavior
//     if (this.hash !== '') {
//       // Prevent default anchor click behavior
//       event.preventDefault();

//       // Store hash
//       var hash = this.hash;

//       // Using jQuery's animate() method to add smooth page scroll
//       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//       $('html, body').animate(
//         {
//           scrollTop: $(hash).offset().top,
//         },
//         800,
//         function () {
//           // Add hash (#) to URL when done scrolling (default click behavior)
//           window.location.hash = hash;
//         }
//       );
//     } // End if
//   });
// });
// -----------------------END Smooth scrolling--------------------------/////

// -----------------------NAVBAR-----------------------//////////////////
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav ul li a');

const navbar = document.querySelector('.navbar');
const logo = document.querySelector('.svg_logo');

var lastScrollTop; // This Varibale will store the top position

window.addEventListener('scroll', function () {
  //on every scroll this funtion will be called

  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //This line will get the location on scroll

  if (scrollTop > lastScrollTop) {
    //if it will be greater than the previous
    navbar.style.top = '-100px';
    //set the value to the negetive of height of navbar
  } else {
    navbar.style.top = '0';
  }

  lastScrollTop = scrollTop; //New Position Stored
});
// var current = '';

// sections.forEach((section) => {
//   const sectionTop = section.offsetTop;
//   if (currentScrollPos >= sectionTop - 300) {
//     current = section.getAttribute('id');
//   }
// });

// navLi.forEach((a) => {
//   a.classList.remove('active');
//   if (a.href.includes(current)) {
//     a.classList.add('active');
//   }
// });

// -----------------------END NAVBAR-----------------------//////////////

// -------------- ANIMATION WHEN ON VIEWPORT--------------

AOS.init({
  disable: function () {
    var maxWidth = 768;
    return window.innerWidth < maxWidth;
  },
});

// Hamburger menu
const menuBtn = document.querySelector('.menu-btn');
const menuItems = document.querySelector('.nav__list');
const menuItem = document.querySelectorAll('.nav__item');

// Main toggle

function toggle() {
  menuBtn.classList.toggle('open');
  menuItems.classList.toggle('open');
}

const overlay = document.querySelector('.overlay');

const toggleModal2 = function () {
  overlay.classList.toggle('hidden');

  if (!overlay.classList.contains('hidden')) {
    // Disable scroll
    $('body').css('overflow', 'hidden');

    toggle();
  } else {
    // Enable scroll
    $('body').css('overflow', 'auto');
    toggle();
  }
};
menuBtn.addEventListener('click', toggleModal2);
overlay.addEventListener('click', toggleModal2);

// toggle on item click if open
menuItem.forEach((item) => {
  item.addEventListener('click', () => {
    if (menuBtn.classList.contains('open')) {
      toggle();
      overlay.classList.toggle('hidden');
      $('body').css('overflow', 'auto');
    }
  });
});

//////////////////////////////////////////Modal Toggle/////////////////////////////////////////////////////////

// media query event handler
if (matchMedia) {
  const mq = window.matchMedia('(min-width: 768px)');
  mq.addListener(WidthChange);
  WidthChange(mq);
}

// media query change
function WidthChange(mq) {
  if (mq.matches) {
    // Open Modal
    $('.about__btn').click(function clickHandler() {
      tl.play();

      $('body').css('overflow', 'hidden');
    });

    // close modal
    $('.close-btn').click(function clickHandler() {
      tl.reverse();

      $('body').css('overflow', 'auto');
    });
  }
}

// $('body > div:not(#left-panel)').click(function clickHandler() {
//   tl.reverse();
//   $('body').css('overflow', 'auto');
// });

var wrapper = document.getElementById('wrapper');
var modal = document.getElementById('modal');
var left_panel = document.getElementById('left-panel');
var right_panel = document.getElementById('right-panel');

// Modal Animation
var tl = new TimelineMax({ paused: true });
var modal_intro_duration = 0.4;
var panel_intro_duration = 0.5;

tl.fromTo(
  wrapper,
  modal_intro_duration,
  {
    display: 'none',
    opacity: 0,
  },
  {
    display: 'block',
    opacity: 1,
  }
);

// Left side
tl.fromTo(
  left_panel,
  panel_intro_duration,
  {
    y: -1000,
    // rotationY: 35,
    scale: 0.4,
  },
  {
    y: 0,
    // rotationY: 0,
    scale: 1,
  },
  0
);

// Right side
tl.fromTo(
  right_panel,
  panel_intro_duration,
  {
    y: 1000,
    // rotationY: -35,
    scale: 0.4,
  },
  {
    y: 0,
    // rotationY: 0,
    scale: 1,
  },
  0
);
