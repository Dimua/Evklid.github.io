document.addEventListener("DOMContentLoaded", function () {

  //BURGER
  document.querySelector(".header__btn").addEventListener("click", function () {

    document.querySelector(".burger").classList.toggle("burger--active");
    document.querySelector(".header__nav").classList.toggle("active");
  });



  // SLIDER
  const container = document.querySelector('.hero__wrapper');
  const swiper = new Swiper('.hero__swiper', {
    speed: 300,
    pagination: {
      el: '.hero__pagination',
      type: 'bullets',
      clickable: true,
      dynamicMainBullets: 3,
      bulletActiveClass: 'swiper-pagination-bullet-active',
      bulletClass: 'swiper-pagination-bullet',
    },
    a11y: {
      paginationBulletMessage: 'Перейти на слайд номер {{index}}',
      slideLabelMessage: "Слайд с контентом номер {{index}} из {{slidesLength}}"
    }
  });


  //Form-search

  document.querySelector(".header__btn-open").addEventListener("click", function () {
    document.querySelector(".form").classList.add("form__active");
  });

  document.querySelector(".form__btn-close").addEventListener("click", function () {
    let form = document.querySelector(".form");
    form.classList.remove("form__active");

  });


  // Tabs
  document.querySelectorAll(".work__steps").forEach(function (tabBtn) {
    tabBtn.addEventListener('click', function (e) {
      const path = e.currentTarget.dataset.path;

      document.querySelectorAll(".work__steps").forEach(function (tabBtn) {
        tabBtn.classList.remove('work__steps--active')
      });
      e.currentTarget.classList.add('work__steps--active');

      document.querySelectorAll(".work__consultation").forEach(function (tab) {
        tab.classList.remove('work__consultation--active')
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('work__consultation--active');
    });
  });


  //Accordion
  let acc = new Accordion('.accordion__list', {
    duration: 700,
    elementClass: 'accordion__item',
    triggerClass: 'accordion__top',
    panelClass: 'accordion__content',
    showMultiple: false,
    collapse: true
  });
});
