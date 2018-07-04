$('.nav_box>li').hover(function(){
    $(this).find('a').addClass('menu_select');
    /*$('ul',this).show();    */
    $('.nav_bg').stop().slideDown(200);
    /*$('.dep2').css('display','block');*/
    $('.dep2').stop().slideDown(200);
},function(){
    $(this).find('a').removeClass('menu_select');
    $('.nav_bg').stop().slideUp(200);
    $('.dep2').stop().slideUp(200);
});

$('.nav_bg').hover(function(){
    $(this).find('a').addClass('menu_select');
    /*$('.dep2').css('display','block');*/
    $('.nav_bg').stop().slideDown(200);
    $('.dep2').stop().slideDown(200);
},function(){
    
    $('.nav_bg').stop().slideUp(200);
    $('.dep2').stop().slideUp(200);
});