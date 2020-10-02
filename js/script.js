$(document.ready(function(){
$('p.design_icon').click(function () {
    $(this).hide();
    $('p.design_para').show();
});
    $('p.design_para').click(function () {
    $(this).hide();
    $('p.design_icon').show();
});
});
