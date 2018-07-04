$('.question_box').click(function(e){
    
    e.preventDefault();
    var classValue = $(this).find('button').attr('class');
    if(classValue == "list_down"){
        $(this).find('button').removeClass('list_down').addClass('list_up');
        $(this).next('.answer_box').show(); 
    }else{
        $(this).find('button').removeClass('list_up').addClass('list_down');
        $(this).next('.answer_box').hide();
    }
    
    console.log(this);
});
