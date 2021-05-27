const searchEl = document.querySelector('.search'); // document은 HTML을 의미.
const searchInputEl = searchEl.querySelector('input');  // searchEl요소의 input을 가리키다.

searchEl.addEventListener('click', function() {
  searchInputEl.focus(); // 돋보기 선택 시, text 창 Focus 되게 하기.
});

searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2021
