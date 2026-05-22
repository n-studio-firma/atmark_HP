(function () {
  var hamburger = document.querySelector('.nav__hamburger');
  var drawer    = document.querySelector('.nav__drawer');
  var overlay   = document.querySelector('.nav__overlay');
  var closeBtn  = document.querySelector('.nav__drawer-close');

  function openMenu() {
    drawer.classList.add('is-open');
    overlay.classList.add('is-open');
    hamburger.setAttribute('aria-expanded', 'true');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    drawer.classList.remove('is-open');
    overlay.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (hamburger) hamburger.addEventListener('click', openMenu);
  if (closeBtn)  closeBtn.addEventListener('click', closeMenu);
  if (overlay)   overlay.addEventListener('click', closeMenu);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  /* ---- ドロワー内 STORE アコーディオン ---- */
  var storeBtn = document.querySelector('.nav__drawer-store-btn');
  var storeSub = document.querySelector('.nav__drawer-sub');
  if (storeBtn && storeSub) {
    storeBtn.addEventListener('click', function () {
      var isOpen = storeBtn.getAttribute('aria-expanded') === 'true';
      storeBtn.setAttribute('aria-expanded', String(!isOpen));
      storeSub.classList.toggle('is-open', !isOpen);
      storeBtn.querySelector('.nav__drawer-caret').textContent = isOpen ? '▾' : '▴';
    });
  }

  /* ---- フッター STORE アコーディオン ---- */
  var footerStoreBtn = document.querySelector('.footer__store-btn');
  var footerStoreSub = document.querySelector('.footer__store-sub');
  if (footerStoreBtn && footerStoreSub) {
    footerStoreBtn.addEventListener('click', function () {
      var isOpen = footerStoreSub.classList.contains('is-open');
      footerStoreSub.classList.toggle('is-open', !isOpen);
      footerStoreBtn.querySelector('.footer__store-caret').textContent = isOpen ? '▾' : '▴';
    });
  }
})();
