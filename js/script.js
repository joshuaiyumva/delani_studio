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

    // Contact us form interface logic...
    $('#submitBtn').click(function (e) {
        e.preventDefault();
        var names = $('input#nameTxt').val();
        var mails = $('input#mailTxt').val();
        var messageBox = $('textarea#messageTxt').val();
        $("#myForm").submit();
        if (names == "" || mails == "" || messageBox == "") {
            alert("Please fill all element first");
            return false;
        } else {
            alert("Hello " + names + " ,your e-mail is: " + mails + " , your message was received Thank you for reaching out!");
        }
    });
});