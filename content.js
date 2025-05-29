//下拉式選單

 $(document).ready(function () {
  let closeTimer;

  $('.dropdown').hover(
    function () {
      clearTimeout(closeTimer);

      // 收起其他下拉選單
      $('.dropdown-menu').not($(this).find('.dropdown-menu')).stop(true, true).fadeOut(200);

      // 展開目前這個
      $(this).find('.dropdown-menu').stop(true, true).fadeIn(200);
    },
    function () {
      const $menu = $(this).find('.dropdown-menu');
      closeTimer = setTimeout(function () {
        $menu.stop(true, true).fadeOut(200);
      }, 300); // 延遲關閉
    }
  );
});