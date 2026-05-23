(function () {
  var src = document.currentScript ? document.currentScript.src : '';
  var root = src.replace(/\/js\/header\.js.*$/, '/');

  var p = window.location.pathname;
  var atHome    = !(/\/(about|recruit|contact|privacy|store)\//.test(p));
  var atAbout   = /\/about\//.test(p);
  var atRecruit = /\/recruit\//.test(p);
  var atContact = /\/contact\//.test(p);
  var atStore   = /\/store\//.test(p);
  var atNamba   = /\/store\/namba\//.test(p);
  var atNaka    = /\/store\/nakazakicho\//.test(p);
  var atFukuoka = /\/store\/fukuoka\//.test(p);

  function ca(on) { return on ? ' class="is-active" aria-current="page"' : ''; }
  function c(on)  { return on ? ' class="is-active"' : ''; }

  document.write(
    '<a href="#main-content" class="skip-link">メインコンテンツへスキップ</a>' +
    '<header class="header"><div class="header__inner">' +
    '<a href="' + root + 'index.html" class="logo" aria-label="at mark home">' +
    '<img src="' + root + 'images/common/logo.png" alt="" class="logo__img" width="1272" height="1042"></a>' +
    '<nav class="nav" aria-label="primary"><ul class="nav__list">' +
    '<li><a href="' + root + 'index.html"' + ca(atHome) + '>HOME</a></li>' +
    '<li><a href="' + root + 'about/index.html"' + ca(atAbout) + '>ABOUT</a></li>' +
    '<li class="nav__item--dd">' +
    '<a href="#"' + (atStore ? ' class="is-active" aria-current="page"' : '') + '>STORE<span class="nav__caret"> ▾</span></a>' +
    '<ul class="nav__dropdown">' +
    '<li><a href="' + root + 'store/namba/index.html"' + c(atNamba) + '>難波本店</a></li>' +
    '<li><a href="' + root + 'store/nakazakicho/index.html"' + c(atNaka) + '>中崎町店</a></li>' +
    '<li><a href="' + root + 'store/fukuoka/index.html"' + c(atFukuoka) + '>福岡店</a></li>' +
    '</ul></li>' +
    '<li><a href="' + root + 'recruit/index.html"' + ca(atRecruit) + '>RECRUIT</a></li>' +
    '<li><a href="' + root + 'contact/index.html"' + ca(atContact) + '>CONTACT</a></li>' +
    '</ul>' +
    '<a href="https://www.instagram.com/atmark.acai?igsh=MmFkdWY1Mmg0eDNp" class="nav__ig" target="_blank" rel="noopener noreferrer" aria-label="Instagram">' +
    '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">' +
    '<rect x="3" y="3" width="18" height="18" rx="5" ry="5"/>' +
    '<circle cx="12" cy="12" r="4"/>' +
    '<circle cx="17.5" cy="6.5" r="0.6" fill="currentColor"/>' +
    '</svg></a>' +
    '<button class="nav__hamburger" aria-label="メニューを開く" aria-expanded="false">' +
    '<span></span><span></span><span></span>' +
    '</button></nav></div></header>' +
    '<div class="nav__drawer" aria-hidden="true">' +
    '<button class="nav__drawer-close" aria-label="メニューを閉じる">' +
    '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12"/></svg>' +
    '</button>' +
    '<ul class="nav__drawer-list">' +
    '<li><a href="' + root + 'index.html">HOME</a></li>' +
    '<li><a href="' + root + 'about/index.html">ABOUT</a></li>' +
    '<li class="nav__drawer-item--store">' +
    '<button class="nav__drawer-store-btn" aria-expanded="false">STORE <span class="nav__drawer-caret">▾</span></button>' +
    '<ul class="nav__drawer-sub">' +
    '<li><a href="' + root + 'store/namba/index.html">難波本店</a></li>' +
    '<li><a href="' + root + 'store/nakazakicho/index.html">中崎町店</a></li>' +
    '<li><a href="' + root + 'store/fukuoka/index.html">福岡店</a></li>' +
    '</ul></li>' +
    '<li><a href="' + root + 'recruit/index.html">RECRUIT</a></li>' +
    '<li><a href="' + root + 'contact/index.html">CONTACT</a></li>' +
    '</ul></div>' +
    '<div class="nav__overlay"></div>'
  );
})();
