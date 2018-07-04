$(document).ready(function(){
   $('.tab_menu a').addClass('off');
    $('.franchise1').removeClass('off').addClass('on');
    
    $('#franchising').load("franchising.html");
});

$('.tab_menu a').click(function(e){
    e.preventDefault();
    
    $('.tab_menu a').addClass('off');
    $(this).removeClass('off').addClass('on');
    
    var clsName = $(this).attr('class');
    var html_url = null;

    if(clsName.match('franchise1')){
        
        html_url = 'franchising.html';
    }else if(clsName.match('franchise2')){
        
        html_url = 'franchising2.html';
    }

    $.ajax({
        url : html_url,
        success : function(result) {
            $("#franchising").html(result);
        }
    });
});


