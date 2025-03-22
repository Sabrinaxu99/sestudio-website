
let currentLang = 'cn';
function toggleLang() {
  const elements = document.querySelectorAll('[data-cn]');
  currentLang = currentLang === 'cn' ? 'en' : 'cn';
  elements.forEach(el => {
    el.innerText = el.dataset[currentLang];
  });
  document.querySelector('.lang-toggle').innerText = currentLang === 'cn' ? 'English' : '中文';
}
