$('.card_box').hover(function(){
    console.log('in')
           $(this).find('.card_detail').css('display','block');
        },function(){
            $(this).find('.card_detail').css('display','none');
});

$('.card_box_happy').hover(function(){
    console.log('in2')
           $(this).find('.card_detail_happy').css('display','block');
        },function(){
            $(this).find('.card_detail_happy').css('display','none');
});
