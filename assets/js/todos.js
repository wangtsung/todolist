/// <reference path="./lib/jquery-3.3.1.min.js" />
// Check off Specific Todos By Clicking
$('ul').on('click','li',function (e) {
    $(this).toggleClass('completed');
});

$('ul').on('click','span',function (e) {
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    e.stopPropagation();
});

$('input[type="text"]').keypress(function(e){
    
    if(e.which === 13){
        const todoText = $(this).val();
        $('ul').append('<li><span><i class="fa fa-trash"></i></span> ' + todoText + '</li>');
        $(this).val('');
    }
});

$('.fa-plus').click(function (e) { 
    $('input[type="text"]').fadeToggle();
});
