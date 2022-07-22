const btn = document.querySelectorAll('.gallery-slider__slide');
const modal = document.querySelector('.modal__list');
const block = document.querySelectorAll('.modal__item');
const exitBtn = document.querySelectorAll('.block__btn');

btn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    document.body.classList.toggle('stop-scroll');

    let path = e.currentTarget.getAttribute('data-path');

    block.forEach(function (el) {
     el.classList.remove('modal__item--active');
    })

    document.querySelector(`[data-gallery="${path}"]`).classList.add('modal__item--active');
    modal.classList.add('modal__list--active');

    setTimeout(function() {
      let activeModal = document.querySelector('.modal__item--active');
      activeModal.querySelector('.block__btn').focus();
    }, 100);
  });
});

exitBtn.forEach(function (btn) {
  btn.addEventListener('click', function () {
    document.body.classList.remove('stop-scroll');
    modal.classList.remove('modal__list--active');
    block.classList.remove('modal__item--active');
  })
})

modal.addEventListener('click', function (el){
  if (el.target === modal) {
    block.forEach(function (el) {
      el.classList.remove('modal__item--active');
    })
    document.body.classList.remove('stop-scroll');
    modal.classList.remove('modal__list--active');
  }
})

document.addEventListener('keydown', function (e){
  if (e.key === 'Escape') {
    block.forEach(function (el) {
      el.classList.remove('modal__item--active');
    })
    document.body.classList.remove('stop-scroll');
    modal.classList.remove('modal__list--active');
  }
})
