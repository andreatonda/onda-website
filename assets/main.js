// Minimal JS — only mobile menu toggle.
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.querySelector('.mobile-menu');
  if (!toggle || !menu) return;
  toggle.addEventListener('click', function () {
    menu.classList.toggle('open');
    var expanded = menu.classList.contains('open');
    toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  });
})();
