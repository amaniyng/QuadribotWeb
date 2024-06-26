document.addEventListener('scroll', function () {
  const sections = document.querySelectorAll('.section');

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const progressBar = section.querySelector('.progress-bar');
    const sectionHeight = section.offsetHeight;
    const scrollPosition = window.innerHeight + window.scrollY;

    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      const progress = ((scrollPosition - rect.top) / sectionHeight) * 100;
      progressBar.style.width = progress + '%';
    }
  });
});



(function ($) {


    $(window).on('scroll', function(){
      function isScrollIntoView(elem, index) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(window).height()*.5;
        if(elemBottom <= docViewBottom && elemTop >= docViewTop) {
          $(elem).addClass('active');
        }
        if(!(elemBottom <= docViewBottom)) {
          $(elem).removeClass('active');
        }
        var MainTimelineContainer = $('#vertical-scrollable-timeline')[0];
        var MainTimelineContainerBottom = MainTimelineContainer.getBoundingClientRect().bottom - $(window).height()*.5;
        $(MainTimelineContainer).find('.inner').css('height',MainTimelineContainerBottom+'px');
      }
      var timeline = $('#vertical-scrollable-timeline li');
      Array.from(timeline).forEach(isScrollIntoView);
    });
  
  })(window.jQuery);


  /*Caroussel*/
  
  var carousel = document.querySelector('#main_slider');

// Création d'un écouteur d'événement pour le clic sur le bouton de navigation suivant
document.querySelector('.carousel-control-next').addEventListener('click', function() {
carousel.querySelector('.carousel-item.active').classList.remove('active');

// Sélection des boutons de navigation du carrousel
var prevButton = document.querySelector('.carousel-control-prev');
var nextButton = document.querySelector('.carousel-control-next');

// Changement de la couleur des boutons
prevButton.style.color = 'black';
nextButton.style.color = 'black';

var next = carousel.querySelector('.carousel-item-next');
if (!next) {
  next = carousel.querySelector('.carousel-item:first-child');
}
next.classList.add('active');
});

// Création d'un écouteur d'événement pour le clic sur le bouton de navigation précédent
document.querySelector('.carousel-control-prev').addEventListener('click', function() {
carousel.querySelector('.carousel-item.active').classList.remove('active');
var prev = carousel.querySelector('.carousel-item-prev');
if (!prev) {
  prev = carousel.querySelector('.carousel-item:last-child');
}
prev.classList.add('active');
});




/*responsive carousel*/
var container = document.getElementById('container')
var slider = document.getElementById('slider');
var slides = document.getElementsByClassName('slide').length;
var buttons = document.getElementsByClassName('btn');

var currentPosition = 0;
var currentMargin = 0;
var slidesPerPage = 0;
var slidesCount = slides - slidesPerPage;
var containerWidth = container.offsetWidth;
var prevKeyActive = false;
var nextKeyActive = true;

window.addEventListener("resize", checkWidth);

function checkWidth() {
	containerWidth = container.offsetWidth;
	setParams(containerWidth);
}

function setParams(w) {
	if (w < 551) {
		slidesPerPage = 1;
	} else {
		if (w < 901) {
			slidesPerPage = 2;
		} else {
			if (w < 1101) {
				slidesPerPage = 3;
			} else {
				slidesPerPage = 4;
			}
		}
	}
	slidesCount = slides - slidesPerPage;
	if (currentPosition > slidesCount) {
		currentPosition -= slidesPerPage;
	};
	currentMargin = - currentPosition * (100 / slidesPerPage);
	slider.style.marginLeft = currentMargin + '%';
	if (currentPosition > 0) {
		buttons[0].classList.remove('inactive');
	}
	if (currentPosition < slidesCount) {
		buttons[1].classList.remove('inactive');
	}
	if (currentPosition >= slidesCount) {
		buttons[1].classList.add('inactive');
	}
}

setParams();

function slideRight() {
	if (currentPosition != 0) {
		slider.style.marginLeft = currentMargin + (100 / slidesPerPage) + '%';
		currentMargin += (100 / slidesPerPage);
		currentPosition--;
	};
	if (currentPosition === 0) {
		buttons[0].classList.add('inactive');
	}
	if (currentPosition < slidesCount) {
		buttons[1].classList.remove('inactive');
	}
};

function slideLeft() {
	if (currentPosition != slidesCount) {
		slider.style.marginLeft = currentMargin - (100 / slidesPerPage) + '%';
		currentMargin -= (100 / slidesPerPage);
		currentPosition++;
	};
	if (currentPosition == slidesCount) {
		buttons[1].classList.add('inactive');
	}
	if (currentPosition > 0) {
		buttons[0].classList.remove('inactive');
	}
};

  /*Icone defilement 0-10*/
 /* Animation des compteurs 0-10 
function animateNumberFromZeroToTen(element, finalNumber, displayText) {
  var startNumber = 1;
  var interval = 50;
  var increment = finalNumber / (1000 / interval);
  var timer = setInterval(function() {
      startNumber += increment;
      element.innerText = "+" + Math.floor(startNumber) + " " + displayText;
      if (startNumber >= finalNumber) {
          clearInterval(timer);
      }
  }, interval);
}

function handleScrollForZeroToTen() {
  var section = document.querySelector('.counter-section');
  var numberElement = section.querySelector('.counter-number');
  if (isElementInViewport(section)) {
      animateNumberFromZeroToTen(numberElement, 10, "Y");
      window.removeEventListener('scroll', handleScrollForZeroToTen);
  }
}

window.addEventListener('scroll', handleScrollForZeroToTen);*/

/* Animation des compteurs 0-50 

function animateNumber(element, finalNumber, displayText) {
  var startNumber = 0;

  var interval = 25; // 
  var increment = finalNumber / (1000 / interval);
  var timer = setInterval(function() {
      startNumber += increment;
      element.innerText = Math.floor(startNumber) + " " + displayText;
      if (startNumber >= finalNumber) {
          clearInterval(timer);
      }
  }, interval);
}


function handleScroll() {
  var section = document.querySelector('.counter-section');
  var numberElements = section.querySelectorAll('.counter-number');

  numberElements.forEach(function(numberElement) {
      if (numberElement.innerText === "50+") {
          if (isElementInViewport(section)) {

              animateNumber(numberElement, 50, "+");

              window.removeEventListener('scroll', handleScroll);
          }
      }
  });
}
*/function animateExperienceCounter() {
  var experienceCounter = document.querySelector('#section-counter .experience-counter');
  var finalNumber = parseInt(experienceCounter.dataset.toggle);
  animateNumber(experienceCounter, finalNumber, "Y");
}

function animateNumber(element, finalNumber, displayText) {
  var startNumber = 1;
  var interval = 50;
  var increment = finalNumber / (1000 / interval);
  var timer = setInterval(function() {
      startNumber += increment;
      element.innerText = "+" + Math.floor(startNumber) + " " + displayText;
      if (startNumber >= finalNumber) {
          clearInterval(timer);
      }
  }, interval);
}

function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScrollForExperienceCounter() {
  var section = document.getElementById('section-counter');
  var experienceCounter = section.querySelector('.experience-counter');
  if (isElementInViewport(section)) {
      animateExperienceCounter();
      window.removeEventListener('scroll', handleScrollForExperienceCounter);
  }
}

window.addEventListener('scroll', handleScrollForExperienceCounter);

function animateProjectsCounter() {
  var projectsCounter = document.querySelector('#section-counter .projects-counter');
  var finalNumber = parseInt(projectsCounter.dataset.toggle);
  animateNumber(projectsCounter, finalNumber, "");
}

// La fonction animateNumber reste la même que dans le script précédent

function handleScrollForProjectsCounter() {
  var section = document.getElementById('section-counter');
  var projectsCounter = section.querySelector('.projects-counter');
  if (isElementInViewport(section)) {
      animateProjectsCounter();
      window.removeEventListener('scroll', handleScrollForProjectsCounter);
  }
}

window.addEventListener('scroll', handleScrollForProjectsCounter);


/* Animation carré qui tourne

// Fonction pour vérifier si la section est visible à l'écran
function isElementInViewport(element) {
var rect = element.getBoundingClientRect();
return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
);
}

// Fonction pour gérer l'animation lorsque la section est visible
function handleAnimation() {
var sectionCounter = document.getElementById('section-counter');
if (isElementInViewport(sectionCounter)) {
    // Déclencher votre animation ici
    // Par exemple, vous pouvez ajouter une classe d'animation à chaque élément du compteur
    var numbers = sectionCounter.querySelectorAll('.number');
    numbers.forEach(function(number) {
        number.classList.add('animate'); // Remplacez 'animate' par la classe d'animation que vous souhaitez utiliser
    });

    // Supprimer l'écouteur d'événement une fois que l'animation est déclenchée pour éviter de la répéter
    window.removeEventListener('scroll', handleAnimation);
}
}

// Ajouter un écouteur d'événement de défilement de la fenêtre pour déclencher l'animation
window.addEventListener('scroll', handleAnimation);

// Appel initial pour vérifier si la section est déjà visible lors du chargement de la page
handleAnimation();*/ 
document.addEventListener("DOMContentLoaded", function() {
  var observers = document.querySelectorAll('.progress-bar');
  var options = {
    root: null, // observer par rapport à la fenêtre
    rootMargin: '0px',
    threshold: 0.5 // déclenche quand 50% de l'élément est visible
  };

  var observer = new IntersectionObserver(function(entries, self) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Ajouter l'animation quand la section devient visible
        entry.target.style.transform = "translateX(32%)";
        
        entry.target.style.width = "60%";
      } else {
        // Réinitialiser la barre quand elle n'est pas visible
        entry.target.style.width = "0%";
        entry.target.style.transform = "translateX(50%)";
        entry.target.style.bottom= "5px";
   
      }
    });
  }, options);

  observers.forEach(observerElement => {
    observer.observe(observerElement);
  });
});

$(document).ready(function() {
  // Afficher ou masquer le bouton en fonction du défilement de la page
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Faire défiler la page vers le haut lorsque le bouton est cliqué
  $('#scrollToTop').click(function() {
    $('html, body').animate({scrollTop: 0}, 60);
    return false;
  });
});

let timeout;

// Fonction pour cacher le bouton
function hideScrollButton() {
  $('#scrollToTop').fadeOut();
}

// Fonction pour montrer le bouton
function showScrollButton() {
  $('#scrollToTop').fadeIn();
}

// Événement pour détecter les mouvements de la souris
$(document).on('mousemove', function() {
  clearTimeout(timeout);
  showScrollButton();
  timeout = setTimeout(hideScrollButton, 3000); // Définir un délai de 3 secondes avant de cacher le bouton
});

// Événement pour détecter l'entrée de la souris
$('#scrollToTop').on('mouseenter', function() {
  clearTimeout(timeout);
});

// Événement pour détecter la sortie de la souris
$('#scrollToTop').on('mouseleave', function() {
  timeout = setTimeout(hideScrollButton, 3000); // Définir un délai de 3 secondes avant de cacher le bouton
});


// script.js

// Smooth scrolling for navigation links
$(document).ready(function(){
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
  });
  
  // Intersection Observer for animations
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        if (entry.target.classList.contains('about-title') || entry.target.classList.contains('about-text')) {
          entry.target.classList.add('animate__slideInLeft', 'animate__slow');
        } else if (entry.target.classList.contains('header-content h1') || entry.target.classList.contains('header-content p')) {
          entry.target.classList.add('animate__fadeInDown', 'animate__slow');
        } else if (entry.target.classList.contains('portfolio-item')) {
          entry.target.classList.add('animate__zoomIn', 'animate__slow');
        } else if (entry.target.classList.contains('testimonial-item')) {
          entry.target.classList.add('animate__slideInUp', 'animate__slow');
        } else if (entry.target.classList.contains('blog-post')) {
          entry.target.classList.add('animate__slideInUp', 'animate__slow');
        } else if (entry.target.classList.contains('team-member')) {
          entry.target.classList.add('animate__zoomIn', 'animate__slow');
        } else if (entry.target.classList.contains('header-content a')) {
          entry.target.classList.add('animate__bounceIn', 'animate__slow');
        } else {
          entry.target.classList.add('animate__fadeIn', 'animate__slow');
        }
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  // Observe all elements with 'animate__animated' class
  document.querySelectorAll('.animate__animated').forEach(element => {
    observer.observe(element);
  });
});


