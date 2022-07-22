let tabsBtn = document.querySelectorAll('.artist__btn');
let tabsItem = document.querySelectorAll('.bookmark');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const way = e.currentTarget.dataset.way;

    tabsBtn.forEach(function (btn) {
      btn.classList.remove('artist__btn--active');
      btn.setAttribute("aria-expanded", "false");
    });
    e.currentTarget.classList.add('artist__btn--active');
    e.currentTarget.setAttribute("aria-expanded", "true");

    tabsItem.forEach(function (el) {
      el.classList.remove('bookmark--active')
    });
    document.querySelector(`[data-mark="${way}"]`).classList.add('bookmark--active');
  });
});
