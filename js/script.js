$(document).ready(function () {
    // Design icon interface logic...
    $('#firstDiv p.design_icon').click(function () {
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

    // $("img.img1").mouseover(function(){
    //     $(this).toggle();
    //     $('p.img1').toggle();
    // });
    // Portfolio section Interface logic...
    $("img.img1").hover(function () {
        $(this).append('p.img1');
    }, function () {
        $(p.img1).css("font-weight", "bold");
    });

    $('#submitBtn').submit(function(event){
        var names = $('#nameTxt').val();
        var mail = $('#mailTxt').val();
        var message = $('#messageTxt').val();
        if(names == "" || mail == "" || message == ""){
            alert("Please all the boxes first");
        }
        else
        {
            alert("Hello" + names + "your e-mail is:" + mail + " thank you for reaching out to us");
        }
        event.preventbyDefault();
    });
});