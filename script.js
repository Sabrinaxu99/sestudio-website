window.addEventListener('scroll', () => {
  document.querySelectorAll('section').forEach(sec => {
    if (sec.getBoundingClientRect().top < window.innerHeight - 100)
      sec.classList.add('visible');
  });
});

const translations = {
  zh: {title:"赛斯工作室 SEStudio",slogan:"让每一个梦想，都被认真对待。",services:"留学 · 移民 · 国际义工 · 高端定制服务"},
  en: {title:"SEStudio",slogan:"Every Dream Matters.",services:"Study Abroad · Immigration · International Volunteer · Customized Service"},
  pt: {title:"SEStudio",slogan:"Cada sonho é importante.",services:"Estudar no exterior · Imigração · Voluntariado Internacional · Serviço personalizado"}
};

let langs = ['zh','en','pt'], cur=0;

function switchLang(){
  cur=(cur+1)%3;
  document.querySelectorAll('[data-lang]').forEach(el=>{
    let key=el.getAttribute('data-lang'); el.innerText=translations[langs[cur]][key];
  });
}

document.querySelector('.language-selector').onclick=switchLang;

