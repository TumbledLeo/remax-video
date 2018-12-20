$(function(){
  // tab切换
function tabCtrl(ele) {
  $(ele + ' .tabContents .tabContent').hide().eq(0).show();
  $(ele + ' .tabs .tab').eq(0).addClass('active');
  $(ele + ' .tabs .tab').click(function (e) {
      e.stopPropagation();
      e.preventDefault();
      if ($(this).hasClass('active')) {
          return;
      }
      $(this).addClass('active').siblings().removeClass('active');
      var me = $(this);
      var index = 0;
      $(ele + ' .tabs .tab').each(function (i) {
          if (me.get(0) === $(this).get(0)) {
              index = i;
          }
      });
      $(ele + ' .tabContents .tabContent').hide().eq(index).fadeIn(500);
  });
}
$('.kai').click(function(){
  $('.choose').toggle();
});

function moreddhide(e) {
  if (!e) var e = window.event;
  if (e.srcElement) {
      var a = e.srcElement.getAttribute("id");
  } else {
      var a = e.target.getAttribute("id");
  }
  if (a != "pkCity_Show") {
    if(a != "kai"){
      $('.choose').fadeOut();
    }    
  }
};
document.onclick = moreddhide;
})
