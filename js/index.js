$(document).ready(function(){
    $('.event_gnb>li:first, .new_gnb>li:first').removeClass('gnb_off').addClass('gnb_on').siblings().addClass('gnb_off');
});

var idx = 0;
var slidemax = 2;
var pos = 2000;

var new_idx = 0;
var new_slidemax = 1;
var new_pos = 965;



function sliding(add) {
    idx = idx + add;
    new_idx = new_idx + add;
    if(idx < 0) idx = slidemax;
    else if(idx > slidemax) idx = 0;
    
    if(new_idx<0) new_idx=new_slidemax;
    else if(new_idx > new_slidemax) new_idx =0;
    
    $('.event_slide').stop().animate({'left' : -(idx*pos)+"px"}, "slow");
    $('.event_gnb>li').eq(idx).removeClass('gnb_off').addClass('gnb_on').siblings().removeClass('gnb_on').addClass('gnb_off');
    console.log(idx);
    $('.new_slide').stop().animate({'left' : -(new_idx*new_pos)+"px"},"slow");
    $('.new_gnb>li').eq(new_idx).removeClass('gnb_off').addClass('gnb_on').siblings().removeClass('gnb_on').addClass('gnb_off');
}
     
autoslide = setInterval(function() { sliding(1) }, 3000);
     
function after() {
    console.log('in2');
    setTimeout(function() {
        clearInterval(autoslide);  
        autoslide = setInterval(function() { sliding(1) }, 3000);
    }, 2000);
}
     
    /*$('#leftbtn, #rightbtn').click(function() {
        clearInterval(autoslide);  
        if($(this).attr('id') == "leftbtn") sliding(-1);
        else sliding(1);
        after();
    });*/
     
$('.event_gnb > li').click(function() {
    clearInterval(autoslide);  
    idx = $(this).index(); 
    sliding(0);
    after();
});

$('.new_gnb > li').click(function() {
    clearInterval(autoslide);  
    new_idx = $(this).index(); 
    sliding(0);
    after();
});

$('.event_slide').hover(function(){
    clearInterval(autoslide);
},function(){
    autoslide = setInterval(function() { sliding(1) }, 3000);
});