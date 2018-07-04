$(document).ready(function(){
    $('.layer ul li a').addClass('hover_off')
});

$('.trigger').click(function(e){
    e.preventDefault();

    $(this).next('.layer').slideDown('fast');
    $(this).next('.layer').find('.layer_close').click(function(e){
        e.preventDefault();
        $(this).closest('.layer').slideUp('fast');
    });
});

$('.layer ul li a').hover(function(){
    $(this).removeClass('hover_off').addClass('hover_on');
    console.log("in");
},function(){
    $(this).removeClass('hover_on').addClass('hover_off');
})