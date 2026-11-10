(() => {
  const button = document.querySelector('.language');
  function setLanguage(language) {
    const english = language === 'en';
    document.documentElement.lang = english ? 'en' : 'zh-CN';
    document.title = english ? 'Xun Lyu · Academic Homepage' : '吕洵 Xun Lyu · 学术主页';
    button.innerHTML = (english ? '中文' : 'EN') + ' <span aria-hidden="true">↗</span>';
    button.setAttribute('aria-label', english ? '切换为中文' : 'Switch to English');
    button.title = english ? '切换为中文' : 'Switch to English';
    try { localStorage.setItem('homepage-language', language); } catch (_) {}
  }
  let preferred = 'zh-CN';
  try { preferred = localStorage.getItem('homepage-language') || preferred; } catch (_) {}
  setLanguage(preferred);
  button.addEventListener('click', () => setLanguage(document.documentElement.lang === 'en' ? 'zh-CN' : 'en'));
})();
