$(document).ready(function(){
    $('.category>ul>li>a').addClass('off');
    
     //최초 로드시에는 load로 호출.
    $('#card_content').load("card_happyPoint.html");
});
        
$('.category>ul>li>a').click(function(e){
    e.preventDefault();
    $('.category>ul>li>a').removeClass('on');
    $(this).addClass('on');
    
    var clsName = $(this).attr('class');
    var html_url = null;

    if(clsName.match('happypoint')){
        console.log('happypoint');
        html_url = 'card_happyPoint.html';
    }else if(clsName.match('check')){
        console.log('check');
        html_url = 'card_checkCard.html';
    }else if(clsName.match('credit')){
        console.log('credit');
        html_url = 'card_creditCard.html';
    }else if(clsName.match('membership')){
        console.log('membership');
        html_url = 'card_membership.html';
    }else if(clsName.match('gift')){
        console.log('gift');
        html_url = 'card_gift.html';
    }

    $.ajax({
        url : html_url,
        success : function(result) {
            $("#card_content").html(result);
        }
    });
});




