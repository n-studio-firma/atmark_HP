(function () {
  var btns = document.querySelectorAll('.recruit-tab-btn');
  btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      btns.forEach(function (b) {
        b.classList.remove('is-active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-selected', 'true');
      document.querySelectorAll('.recruit-tab-panel').forEach(function (p) {
        p.classList.remove('is-active');
      });
      document.getElementById(btn.dataset.target).classList.add('is-active');
    });
  });
})();
