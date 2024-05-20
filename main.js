// Gestione dello scroll per nascondere la barra di navigazione
let lastScrollTop = 0;
const header = document.querySelector(".header");
const navbar = document.querySelector(".navbar");
const fhRubriche = document.querySelector(".fh-rubriche");

window.addEventListener("scroll", function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll > lastScrollTop && currentScroll > 75) {
    // Scrolling down
    header.classList.add("hide");
    navbar.classList.add("hide");
    fhRubriche.classList.add("hide");

  } else {
    // Scrolling up
    header.classList.remove("hide");
    navbar.classList.remove("hide");
    fhRubriche.classList.remove("hide");
  }
  lastScrollTop = currentScroll;
});

// Gestione del dropdown del menu Edizioni locali

document.addEventListener('DOMContentLoaded', function() {
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdownMenu = document.querySelector('.dropdown-menu');
  const overlay = document.querySelector('.overlay-dropdown-menu');

  let isMenuOpen = false;

  dropdownToggle.addEventListener('click', function(event) {
    event.preventDefault();
    isMenuOpen = !isMenuOpen;
    toggleMenu();
  });

  document.addEventListener('click', function(event) {
    if (!dropdownMenu.contains(event.target) && !dropdownToggle.contains(event.target)) {
      isMenuOpen = false;
      toggleMenu();
    }
  });

  function toggleMenu() {
    if (window.innerWidth > 0) {
      if (isMenuOpen) {
        dropdownMenu.style.display = 'block';
        overlay.style.display = 'block';
      } else {
        dropdownMenu.style.display = 'none';
        overlay.style.display = 'none';
      }
    } 
  }

  // Aggiungi un listener per l'evento scroll
  window.addEventListener('scroll', function() {
    // Controlla se lo scroll è maggiore di 20px
    if (window.scrollY > 20) {
      // Chiudi il dropdown menu e l'overlay
      dropdownMenu.style.display = 'none';
      overlay.style.display = 'none';
    }
  });
});

// Countdown per Paris 2024
const countdownElements = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds")
};

function updateCountdown() {
  const countDownDate = new Date("Jul 27, 2024 17:30:00").getTime();
  const now = new Date().getTime();
  const distance = countDownDate - now;

  if (distance >= 0) {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElements.days.innerHTML = formatTime(days);
    countdownElements.hours.innerHTML = formatTime(hours);
    countdownElements.minutes.innerHTML = formatTime(minutes);
    countdownElements.seconds.innerHTML = formatTime(seconds);
  } else {
    clearInterval(countdownInterval);
    countdownElements.days.innerHTML = "EXPIRED";
  }
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

updateCountdown(); // Esegui subito l'aggiornamento del countdown
const countdownInterval = setInterval(updateCountdown, 1000);

// Gestione del menu a comparsa mobile
document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.querySelector('.menu-icon2');
  const mobileNav = document.getElementById('mobileNav');
  const overlay = document.getElementById('overlay');

  menuIcon.addEventListener('click', function() {
    mobileNav.classList.toggle('open');
    overlay.classList.toggle('active');
    menuIcon.classList.toggle('active');  // Aggiorna lo stato dell'icona del menu
  });

  document.addEventListener('click', function(event) {
    if (!event.target.closest(".menu-icon2, #mobileNav")) {
      mobileNav.classList.remove('open');
      overlay.classList.remove('active');
      menuIcon.classList.remove('active');  // Ripristina lo stato dell'icona del menu
    }
  });

  let lastScrollTop = 0;
  const header = document.querySelector(".header");
  const navbar = document.querySelector(".navbar");
  const fhRubriche = document.querySelector(".fh-rubriche");

  window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop && currentScroll > 75) {
      header.classList.add("hide");
      navbar.classList.add("hide");
      fhRubriche.classList.add("hide");
    } else {
      header.classList.remove("hide");
      navbar.classList.remove("hide");
      fhRubriche.classList.remove("hide");
    }
    lastScrollTop = currentScroll;
  });

  // Mobile footer
  let lastScrollTop2 = 0;
  const mobileFooter = document.querySelector(".mobileFooter");

  window.addEventListener("scroll", function () {
    let currentScroll = window.scrollY || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop2) {
      // Scrolling down
      mobileFooter.classList.add("show");
    } else {
      // Scrolling up
      mobileFooter.classList.remove("show");
    }
    lastScrollTop2 = currentScroll;
  });
});
