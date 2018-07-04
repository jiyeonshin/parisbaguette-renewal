$(document).ready(function(){
    $('.sc_tabmenu>ul>li>a').addClass('sc_off');
    
     //최초 로드시에는 load로 호출.
    $('#sc_content').load("sc01.html");
});
        
$('.sc_tabmenu>ul>li>a').click(function(e){
    e.preventDefault();
    $('.sc_tabmenu>ul>li>a').removeClass('sc_on');
    $(this).addClass('sc_on');
    
    var clsName = $(this).attr('class');
    var html_url = null;

    if(clsName.match('sc01')){
        html_url = 'sc01.html';
    }else if(clsName.match('sc02')){
        html_url = 'sc02.html';
    }else if(clsName.match('sc03')){
        html_url = 'sc03.html';
    }else if(clsName.match('sc04')){
        html_url = 'sc04.html';
    }else if(clsName.match('sc05')){
        html_url = 'sc05.html';
    }else if(clsName.match('sc06')){
        html_url = 'sc06.html';
    }else if(clsName.match('sc07')){
        html_url = 'sc07.html';
    }else if(clsName.match('sc08')){
        html_url = 'sc08.html';
    }

    $.ajax({
        url : html_url,
        success : function(result) {
            $("#sc_content").html(result);
        }
    });
});




