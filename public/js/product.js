$(document).ready(function(){
   $('.category>ul>li>a').addClass('off'); 
});

$('.category>ul>li>a').click(function(event){
    event.preventDefault();
    $('.category>ul>li>a').removeClass('on');
    $(this).addClass('on');
});

$('.normal_pro').hover(function(){
           $(this).find('.hover_pro').css('display','block') ;
        },function(){
            $(this).find('.hover_pro').css('display','none') ;
        });
        
 $('.more').click(function(event){
    event.preventDefault();
     $('.detail_pro').css('display','none');
     $('.conts').css('height','310px');
    $(this).closest('.conts').css('height','750px');
    $(this).parents('.normal_pro').next('.detail_pro').css('display','block');
 });
