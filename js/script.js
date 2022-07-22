document.addEventListener("DOMContentLoaded", ResizeHeight);
window.addEventListener('resize', ResizeHeight);
function ResizeHeight() {
  let headerTop = document.querySelector('.header-top');
  let headerTopHeight = headerTop.offsetHeight;
  document.querySelector(':root').style.setProperty('--header-top-height', `${headerTopHeight}px`);
  let headerBottom = document.querySelector('.header-bottom');
  let headerBottomHeight = headerBottom.offsetHeight;
  document.querySelector(':root').style.setProperty('--header-bottom-height', `${headerBottomHeight}px`);
}

window.onload = function () {
  tabsBtn.forEach(function (btn){
    Way(btn)
  })
};

window.addEventListener('resize',function (){
  tabsBtn.forEach(function (btn){
    Way(btn)
  })
});

function Way(el) {
  if (window.outerWidth <= 992) {
    let test = el.getAttribute('data-way')
    el.href = "#" + test
  }
  else {
    el.removeAttribute('href');
    el.setAttribute('tabindex', '0');
  }
}


