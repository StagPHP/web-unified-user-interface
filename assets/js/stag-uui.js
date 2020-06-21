(function(){
  $('.parent-dropdown').on('click', function(){
    var dropdown_ele = $(this).parent('.menu-item').children('.child-dropdown');

    if($(this).hasClass('opened')){
      if($(dropdown_ele).hasClass('level-1')){
        $(dropdown_ele).find('.parent-dropdown').removeClass('opened');
        $(dropdown_ele).find('.child-dropdown').removeClass('opened');
      }

      $(this).removeClass('opened');
      dropdown_ele.removeClass('opened');
    } else {
      $(this).addClass('opened');
      dropdown_ele.addClass('opened');
    }
  });
})()