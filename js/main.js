$(window).on("load", function () {
  $("body").removeClass("overflow");
  var checked = localStorage.getItem("mode");
  document.body.classList.add(checked);
  if (checked == "darkMode") {
    document.querySelectorAll(".mode-switch input")[0].checked = checked;
  }
});
$(document).ready(function () {
  sal({
    once: true,
  });
  /************************************ Side Menu ************************************/
  if ($(window).width() <= 1199) {
    $(".menu-btn").on("click", () => {
      $(".menu-overlay").fadeIn(500);
      $(".header-nav").addClass("active");
      $("body").addClass("overflow");
    });

    $(".close-menu,.menu-overlay").on("click", () => {
      $(".menu-overlay").fadeOut(500);
      $(".header-nav").removeClass("active");
      $("body").removeClass("overflow");
    });

    $(".has_children>a").click(function (e) {
      e.preventDefault();
      e.stopPropagation();
      $(".has_children>a").not(this).removeClass("active");
      $(this).toggleClass("active");
      if ($(this).siblings().css("display") == "none") {
        $(this).siblings().slideDown(500);
      } else {
        $(this).siblings().slideUp(500);
      }
      $(".has_children>a").not(this).siblings().slideUp(500);
    });
  }
  /************************************ Main Slider ************************************/
  var mainSwiper = new Swiper(".main-slider .swiper", {
    a11y: {
      enabled: false,
    },
    spaceBetween: 10,
    loop: true,
    // autoplay: {
    //   delay: 5000,
    // },
    // effect: "fade",
    navigation: {
      nextEl: ".main-slider .swiper-btn-next",
      prevEl: ".main-slider .swiper-btn-prev",
    },
    pagination: {
      el: ".main-slider .swiper-pagination",
      clickable: true,
    },
  });
  /************************************ Services Sliders ************************************/
  var servicesSwiper = new Swiper(".services-slider .swiper", {
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    navigation: {
      nextEl: ".services-slider .swiper-btn-next",
      prevEl: ".services-slider .swiper-btn-prev",
    },
    pagination: {
      el: ".services-slider .swiper-pagination",
      clickable: true,
    },
  });
  /************************************ Projects Sliders ************************************/
  var projectsSwiper = new Swiper(".projects-slider .swiper", {
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    navigation: {
      nextEl: ".projects-slider .swiper-btn-next",
      prevEl: ".projects-slider .swiper-btn-prev",
    },
    pagination: {
      el: ".projects-slider .swiper-pagination",
      clickable: true,
    },
  });
  /************************************ Gallery Sliders ************************************/
  var gallerySwiper = new Swiper(".gallery-slider .swiper", {
    loop: true,
    centeredSlides: true,
    navigation: {
      nextEl: ".gallery-slider .swiper-btn-next",
      prevEl: ".gallery-slider .swiper-btn-prev",
    },
    pagination: {
      el: ".gallery-slider .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1.5,
        spaceBetween: 10,
      },
      767: {
        spaceBetween: 30,

        slidesPerView: "auto",
      },
    },
  });

  /************************************ Footer ************************************/
  if ($(window).width() <= 767) {
    $(".footer-title").click(function () {
      $(".footer-title").not(this).removeClass("active");
      $(this).toggleClass("active");
      if ($(this).siblings().css("display") == "none") {
        $(this).siblings().slideDown(500);
      } else {
        $(this).siblings().slideUp(500);
      }
      $(".footer-title").not(this).siblings().slideUp(500);
    });
  }
});

function modeSwitch(checkBox) {
  if (checkBox.checked == true) {
    document.body.classList.add("darkMode");
    localStorage.setItem("mode", "darkMode");
  } else {
    document.body.classList.remove("darkMode");
    localStorage.setItem("mode", "light");
  }
}
