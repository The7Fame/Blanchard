let openBtn = document.querySelector('.loupe');
let closeBtn = document.querySelector('.search__close');
let inputSearch = document.querySelector('.search');

openBtn.addEventListener('click', function () {
  inputSearch.classList.add('search--active');
});

closeBtn.addEventListener('click', function () {
  inputSearch.classList.remove('search--active');
})
