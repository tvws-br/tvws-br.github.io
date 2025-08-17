// Realça o item ativo via JS (fallback) quando o Liquid não marcar.
(function(){
  const path = location.pathname.replace(/\/$/,''); // remove trailing /
  document.querySelectorAll('.menu a').forEach(a => {
    const href = a.getAttribute('href').replace(/\/$/,'');
    if (href === path) a.classList.add('active');
    if (path === '' && href.endsWith('/')) a.classList.add('active');
  });
})();
