(function () {
  if (sessionStorage.getItem('loaded')) return;
  sessionStorage.setItem('loaded', '1');

  document.addEventListener('DOMContentLoaded', function () {

    /* ---- オーバーレイ生成 ---- */
    var overlay = document.createElement('div');
    overlay.id = 'loading';
    overlay.className = 'loading';
    overlay.innerHTML =
      '<div class="loading__wrap">' +
        '<div class="loading__ring loading__ring--1" id="lr1"></div>' +
        '<div class="loading__ring loading__ring--2" id="lr2"></div>' +
        '<img class="loading__logo" id="llogo" src="/images/logo_背景透過.png" alt="at mark">' +
      '</div>' +
      '<p class="loading__brand" id="lbrand">atmark</p>';

    document.body.insertBefore(overlay, document.body.firstChild);

    var logo  = document.getElementById('llogo');
    var ring1 = document.getElementById('lr1');
    var ring2 = document.getElementById('lr2');
    var brand = document.getElementById('lbrand');

    /* reflow */
    overlay.getBoundingClientRect();

    /* ロゴ出現 */
    setTimeout(function () { logo.classList.add('show'); }, 100);

    /* 円が広がる */
    setTimeout(function () {
      ring1.classList.add('expand');
      ring2.classList.add('expand');
    }, 350);

    /* brand テキスト（外側に） */
    setTimeout(function () { brand.classList.add('show'); }, 900);

    /* フェードアウト（描画完了 & ページ読み込み完了の両方を待つ） */
    var drawDone = false;
    var pageDone = false;

    function tryFade() {
      if (!drawDone || !pageDone) return;
      overlay.classList.add('loading--out');
      setTimeout(function () { overlay.style.display = 'none'; }, 700);
    }

    setTimeout(function () { drawDone = true; tryFade(); }, 2800);

    window.addEventListener('load', function () {
      pageDone = true;
      setTimeout(tryFade, 300);
    });
  });
})();
