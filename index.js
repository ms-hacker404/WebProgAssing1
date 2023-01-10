function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

var swiper = new Swiper(".slide-container", {
  slidesPerView: 4,
  spaceBetween: 25,
  sliderPerGroup: 4,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
  },
});


var swiper = new Swiper(".slide-sum", {
  slidesPerView: 5,
  spaceBetween: 0,
  sliderPerGroup: 5,
  loopFillGroupWithBlank: true,
  loop: false,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  autoplay: {
    delay: 4000,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      
    },
    520: {
      slidesPerView: 2,
    
    },
    768: {
      slidesPerView: 3,
      
    },
    1000: {
      slidesPerView: 5,
    },
  },
});