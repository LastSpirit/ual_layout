"use strict";

jQuery(function ($) {
  $(".phone").inputmask({
    mask: "+7(999)-999-99-99",
    showMaskOnHover: false
  });
  $(".date").inputmask({
    mask: "99.99",
    showMaskOnHover: false
  });
  $(window).on("load", function () {
    if ($(window).width() < 1200) {
      $(".u-header__toggle").on("click", function (e) {
        e.preventDefault();
        $(this).toggleClass("u-header__toggle_active");
        $(".u-header").toggleClass("u-header_active");
        $(".u-header__drop").slideToggle("fast");
        $(".u-header__nav").slideToggle("fast");
        $(".u-header__column").slideToggle("fast");
      });
    } else {
      $(".u-header__toggle").on("click", function (e) {
        e.preventDefault();
        $(this).toggleClass("u-header__toggle_active");
        $(".u-header").toggleClass("u-header_active");
        $(".u-header__drop").slideToggle("fast");
      });
    }
  });
  $(".u-home-seo__more").on("click", function (e) {
    e.preventDefault();

    if ($(this).hasClass("u-home-seo__more_active")) {
      $(this).removeClass("u-home-seo__more_active");
      $(this).html("Читать далее");
      $(this).prev().removeClass("u-home-seo__content_active");
    } else {
      $(this).addClass("u-home-seo__more_active");
      $(this).html("Скрыть");
      $(this).prev().addClass("u-home-seo__content_active");
    }
  });
  $(".open-modal").on("click", function (e) {
    e.preventDefault();
    $(".u-modal").toggle();
  });
  $(".u-modal__centered").on("click", function (e) {
    e.preventDefault();

    if (e.target.className === "u-modal__centered") {
      $(".u-modal").hide();
    }
  });
  $(".u-modal__close").on("click", function (e) {
    e.preventDefault();
    $(".u-modal").hide();
  });
  $(".open-popup").on("click", function (e) {
    e.preventDefault();
    $(".u-popup").toggle();
  });
  $(".u-popup__centered").on("click", function (e) {
    e.preventDefault();

    if (e.target.className === "u-popup__centered") {
      $(".u-popup").hide();
    }
  });
  $(".u-popup__close").on("click", function (e) {
    e.preventDefault();
    $(".u-popup").hide();
  });
  $(".open-review").on("click", function (e) {
    e.preventDefault();
    $(".u-popup__name").html($(this).find(".u-page-reviews-card__name").html());
    $(".u-popup__date").html($(this).find(".u-page-reviews-card__date").html());
    $(".u-popup__text").html($(this).find(".u-page-reviews-card__text").html());
    $(".u-popup").toggle();
  });
  $(".u-popup__centered").on("click", function (e) {
    e.preventDefault();

    if (e.target.className === "u-popup__centered") {
      $(".u-popup").hide();
    }
  });
  $(".u-popup__close").on("click", function (e) {
    e.preventDefault();
    $(".u-popup").hide();
  });
  $(".u-modal__check").on("click", function (e) {
    $(this).find("input").prop("checked", true);
  });
  $(".u-tabs__header li").click(function () {
    var tab_id = $(this).attr("data-tab");
    $(".u-tabs__header li").removeClass("current");
    $(".u-tabs__content").removeClass("current");
    $(this).addClass("current");
    $("#" + tab_id).addClass("current");
  });
  new Swiper(".u-home-gallery__cards", {
    navigation: {
      nextEl: ".u-home-gallery .swiper-button-next",
      prevEl: ".u-home-gallery .swiper-button-prev"
    },
    spaceBetween: 0,
    freeMode: true,
    slidesPerView: "auto"
    /* loop: true, */

    /* centeredSlides: true, */

  });
  new Swiper(".u-home-events__cards", {
    navigation: {
      nextEl: ".u-home-events .swiper-button-next",
      prevEl: ".u-home-events .swiper-button-prev"
    },
    spaceBetween: 0,
    freeMode: true,
    slidesPerView: "auto"
    /* loop: true, */

    /* centeredSlides: true, */

  });
  new Swiper(".u-home-process__cards", {
    navigation: {
      nextEl: ".u-home-process .swiper-button-next",
      prevEl: ".u-home-process .swiper-button-prev"
    },
    loop: false,
    spaceBetween: 30,
    slidesPerView: 1,
    breakpoints: {
      768: {
        slidesPerView: 2
      },
      1200: {
        slidesPerView: 4
      }
    }
  });
  new Swiper(".u-home-photos__cards", {
    spaceBetween: 30,
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false
    }
  });
  new Swiper(".u-way-cards__cards", {
    navigation: {
      nextEl: ".u-way-cards .swiper-button-next",
      prevEl: ".u-way-cards .swiper-button-prev"
    },
    loop: true,
    spaceBetween: 30,
    slidesPerView: 1,
    breakpoints: {
      768: {
        slidesPerView: 2
      },
      1200: {
        slidesPerView: 4
      }
    }
  });
  new Swiper(".u-cards__pagination", {
    navigation: {
      nextEl: ".u-cards .swiper-button-next",
      prevEl: ".u-cards .swiper-button-prev"
    },
    spaceBetween: 30,
    slidesPerView: 1,
    loop: false,
    slideToClickedSlide: true
  });
  new Swiper(".u-place-gallery__cards", {
    navigation: {
      nextEl: ".u-place-gallery .swiper-button-next",
      prevEl: ".u-place-gallery .swiper-button-prev"
    },
    loop: true,
    spaceBetween: 30,
    slidesPerView: 1,
    breakpoints: {
      768: {
        slidesPerView: 2
      },
      1200: {
        slidesPerView: 4
      }
    }
  });
  new Swiper(".u-page-reviews__cards", {
    navigation: {
      nextEl: ".u-page-reviews .swiper-button-next",
      prevEl: ".u-page-reviews .swiper-button-prev"
    },
    loop: true,
    spaceBetween: 30,
    slidesPerView: 1,
    breakpoints: {
      768: {
        slidesPerView: 2
      },
      1200: {
        slidesPerView: 3
      }
    }
  });
});
//# sourceMappingURL=main.js.map