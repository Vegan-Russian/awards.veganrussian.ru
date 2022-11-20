import lozad from "lozad";
import "../scss/style.scss";

window.onload = function () {
  document.body.classList.remove("transition-lock");

  lozad(".lozad", {
    rootMargin: "40px 0px",
    loaded: function (el) {
      el.classList.add("loaded");
    },
  }).observe();

  // Хак для анимации элементов по скроллу
  lozad(".anim", {
    rootMargin: "40px 0px",
    loaded: function (el) {
      el.classList.add("loaded");
    },
  }).observe();

  document.querySelector(".burger").addEventListener(
    "click",
    function () {
      document.querySelector(".header__list").classList.toggle("js-active");
      this.classList.toggle("js-active");
      document.body.classList.toggle("scroll-lock");
    },
    { passive: true }
  );

  document.querySelectorAll(".header__link").forEach((item) => {
    item.addEventListener(
      "click",
      function () {
        document.querySelector(".burger").classList.remove("js-active");
        document.body.classList.remove("scroll-lock");
        document.querySelector(".header__list").classList.remove("js-active");
      },
      { passive: true }
    );
  });

  document.querySelectorAll(".accordion__title").forEach((item) => {
    item.addEventListener("click", function () {
      const parent = this.closest(".accordion");
      parent.classList.toggle("active");
    });
  });

  // Логика для открытия и закрытия меню с номинантами на странице голосования
  document.querySelector(".vote-nav__btn")?.addEventListener(
    "click",
    () => {
      document.querySelector(".vote-nav").classList.toggle("js-active");
    },

    { passive: true }
  );

  document.querySelectorAll(".vote-nav__link")?.forEach((item) => {
    item.addEventListener(
      "click",
      function () {
        document.querySelector(".vote-nav").classList.remove("js-active");
      },
      { passive: true }
    );
  });
};
