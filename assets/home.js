(() => {
  const button = document.querySelector('.language');
  const preferenceKey = 'homepage-language-v2';
  function setLanguage(language) {
    const english = language === 'en';
    document.documentElement.lang = english ? 'en' : 'zh-CN';
    document.title = english ? 'Xun Lyu · Academic Homepage' : '吕洵 Xun Lyu · 学术主页';
    button.innerHTML = (english ? '中文' : 'EN') + ' <span aria-hidden="true">↗</span>';
    button.setAttribute('aria-label', english ? '切换为中文' : 'Switch to English');
    button.title = english ? '切换为中文' : 'Switch to English';
  }
  let preferred = 'en';
  try {
    const saved = localStorage.getItem(preferenceKey);
    if (saved === 'en' || saved === 'zh-CN') preferred = saved;
  } catch (_) {}
  setLanguage(preferred);
  button.addEventListener('click', () => {
    const next = document.documentElement.lang === 'en' ? 'zh-CN' : 'en';
    setLanguage(next);
    try { localStorage.setItem(preferenceKey, next); } catch (_) {}
  });
})();
