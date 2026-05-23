(function () {
  var src = document.currentScript ? document.currentScript.src : '';
  var root = src.replace(/\/js\/footer\.js.*$/, '/');

  document.write(
    '<footer class="footer"><div class="footer__inner">' +
    '<a href="' + root + 'index.html" class="logo logo--sm" aria-label="at mark home">' +
    '<img src="' + root + 'images/common/logo.png" alt="" class="logo__img"></a>' +
    '<nav class="footer__nav" aria-label="footer"><ul>' +
    '<li><a href="' + root + 'index.html">HOME</a></li>' +
    '<li><a href="' + root + 'about/index.html">ABOUT</a></li>' +
    '<li class="footer__nav-item--store">' +
    '<button class="footer__store-btn">STORE <span class="footer__store-caret">▾</span></button>' +
    '<ul class="footer__store-sub">' +
    '<li><a href="' + root + 'store/namba/index.html">難波本店</a></li>' +
    '<li><a href="' + root + 'store/nakazakicho/index.html">中崎町店</a></li>' +
    '<li><a href="' + root + 'store/fukuoka/index.html">福岡店</a></li>' +
    '</ul></li>' +
    '<li><a href="' + root + 'recruit/index.html">RECRUIT</a></li>' +
    '<li><a href="' + root + 'contact/index.html">CONTACT</a></li>' +
    '</ul></nav>' +
    '<p class="footer__copy">© atmark株式会社</p>' +
    '</div>' +
    '<div class="footer__bottom"><a href="' + root + 'privacy/index.html" class="footer__privacy-link">Privacy Policy</a></div>' +
    '</footer>'
  );
})();
