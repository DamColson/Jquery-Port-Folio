$('.smallImg').click(function(){
  var src=$(this).attr('src');
  var srcTotalImg = src.replace('Mini','');
  $('.lightbox').html('<img src=\''+srcTotalImg+'\'>');
  $('.lightbox').removeClass('d-none').hide().fadeIn('500').css('display','flex');
});

$('.lightbox').click(function(){
  $('.lightbox').fadeOut('500');
});
