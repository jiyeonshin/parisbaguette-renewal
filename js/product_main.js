$(document).ready(function(){
   $('.category>ul>li>a').addClass('off');
    
    $('#product_content').load("bread.html");
});

$('.category>ul>li>a').click(function(event){
    event.preventDefault();
    $('.category>ul>li>a').removeClass('on');
    $(this).addClass('on');
    
    var clsName = $(this).attr('class');
    var html_url = null;

    if(clsName.match('bread')){
        console.log('bread');
        html_url = 'bread.html';
    }else if(clsName.match('toast')){
        console.log('toast');
        html_url = 'bread_toast.html';
    }else if(clsName.match('donut')){
        console.log('donut');
        html_url = 'bread_donut.html';
    }else if(clsName.match('pastry')){
        console.log('pastry');
        html_url = 'bread_pastry.html';
    }else if(clsName.match('made')){
        console.log('made');
        html_url = 'bread_made.html';
    }else if(clsName.match('europe')){
        console.log('europe');
        html_url = 'bread_europe.html';
    }else if(clsName.match('snack')){
        console.log('snack');
        html_url = 'bread_snack.html';
    }else if(clsName.match('wheat')){
        console.log('wheat');
        html_url = 'bread_wheat.html';
    }

    $.ajax({
        url : html_url,
        success : function(result) {
            $("#product_content").html(result);
        }
    });
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
