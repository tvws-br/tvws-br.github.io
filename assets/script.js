// Highlight active menu item based on current path
(function(){
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.menu a').forEach(a => {
    const href = a.getAttribute('href');
    if ((path === 'index.html' && href === 'index.html') ||
        (path !== 'index.html' && href === path)) {
      a.classList.add('active');
    }
  });
})();
