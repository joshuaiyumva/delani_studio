// Design icon interface logic...
$('p.design_icon').click(function () {
    $(this).hide();
    $('p.design_para').show();
});
    $('p.design_para').click(function () {
    $(this).hide();
    $('p.design_icon').show();
});
// Development icon interface logic...
$('p.dev_icon').click(function () {
    $(this).hide();
    $('p.dev_para').show();
});
$('p.dev_para').click(function () {
    $(this).hide();
    $('p.dev_icon').show();
});
// Product icon interface logic...
$('p.product_icon').click(function () {
    $(this).hide();
    $('p.product_para').show();
});
$('p.product_para').click(function () {
    $(this).hide();
    $('p.product_icon').show();
});

