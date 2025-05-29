$(document).ready(function () {
  // 食譜圖片 hover 放大
  $(".dish-1").hover(
    function () {
      $(this).css({
        transform: "scale(1.08)",
        transition: "transform 0.3s ease"
      });
    },
    function () {
      $(this).css("transform", "scale(1)");
    }
  );



  // 許願池表單提交
  $('#wishForm').on('submit', function (e) {
    e.preventDefault();

    const wishText = $.trim($('input[name="wish"]').val());
    const level = $('select[name="level"]').val();

    if (wishText !== '') {
      let levelText = '';
      if (level === 'beginner') levelText = '🍳 新手希望者';
      else if (level === 'intermediate') levelText = '🍱 中級希望者';
      else if (level === 'advanced') levelText = '🍽️ 進階希望者';

      const wishCard = $(`
        <div class="wish">
          「${wishText}」<br><small>${levelText}</small>
        </div>
      `);

      $('#wishWall').prepend(wishCard);
      $('#wishForm')[0].reset();
    }
  });
});


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






  
