// 页面滚动动态效果
window.addEventListener('scroll', () => {
  document.querySelectorAll('section').forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add('visible');
    }
  });
});

// 中英葡三语切换功能（完整实现）
const translations = {
  zh: {
    title: "赛斯工作室 SEStudio",
    slogan: "让每一个梦想，都被认真对待。",
    services: "留学 · 移民 · 国际义工 · 高端定制服务",
    about: "我们是谁 · About SES",
    aboutText1: "赛斯工作室是一家总部位于葡萄牙的综合型中介机构。",
    aboutText2: "我们致力于为客户提供包录取、全流程托管与高端定制化服务。",
    coreServices: "核心服务 · What We Do",
    service1: "全球留学",
    service2: "投资移民",
    service3: "国际义工",
    service4: "定制服务",
    advantages: "我们的优势 · Why SES",
    adv1: "世界资源整合者",
    adv2: "包录取承诺",
    adv3: "个性化方案设计",
    testimonials: "客户评价 · Testimonials",
    testimonial1: "SES团队给了我清晰的规划。",
    testimonial2: "真实、可靠、处理迅速。",
    contact: "联系我们 · Contact Us"
  },
  en: {
    title: "SEStudio",
    slogan: "Every Dream Matters.",
    services: "Study Abroad · Immigration · International Volunteer · Customized Service",
    about: "About SES",
    aboutText1: "SEStudio is an integrated agency based in Portugal.",
    aboutText2: "We offer guaranteed admission, full-process management, and premium tailored services.",
    coreServices: "What We Do",
    service1: "Global Study Abroad",
    service2: "Investment Immigration",
    service3: "International Volunteer",
    service4: "Customized Services",
    advantages: "Why SES",
    adv1: "Global Resource Integrator",
    adv2: "Admission Guarantee",
    adv3: "Personalized Solutions",
    testimonials: "Testimonials",
    testimonial1: "The SES team provided me with clear guidance.",
    testimonial2: "Reliable, trustworthy, and efficient.",
    contact: "Contact Us"
  },
  pt: {
    title: "SEStudio",
    slogan: "Cada sonho é importante.",
    services: "Estudar no exterior · Imigração · Voluntário Internacional · Serviço personalizado",
    about: "Sobre a SES",
    aboutText1: "SEStudio é uma agência integrada sediada em Portugal.",
    aboutText2: "Oferecemos admissão garantida, gestão completa e serviços personalizados premium.",
    coreServices: "O que fazemos",
    service1: "Estudo Global",
    service2: "Imigração por Investimento",
    service3: "Voluntariado Internacional",
    service4: "Serviços Personalizados",
    advantages: "Por que SES",
    adv1: "Integradora Global de Recursos",
    adv2: "Garantia de Admissão",
    adv3: "Soluções Personalizadas",
    testimonials: "Depoimentos",
    testimonial1: "A equipe da SES me forneceu orientação clara.",
    testimonial2: "Confiável e eficiente.",
    contact: "Contate-nos"
  }
};

let currentLang = 'zh';

function switchLanguage() {
  currentLang = currentLang === 'zh' ? 'en' : currentLang === 'en' ? 'pt' : 'zh';
  document.querySelectorAll('[data-lang]').forEach(el => {
    const key = el.getAttribute('data-lang');
    el.innerText = translations[currentLang][key];
  });
}
  
document.querySelector('.language-selector').addEventListener('click', switchLanguage);


