
jQuery(document).ready(function() {

    /*
        Background slideshow
    */
    $.backstretch([
      "assets/img/backgrounds/1.jpg"
    , "assets/img/backgrounds/2.jpg"
    , "assets/img/backgrounds/3.jpg"
    ], {duration: 3000, fade: 750});

    /*
        Tooltips
    */
    $('.links a.home').tooltip();
    $('.links a.blog').tooltip();

    /*
        Form validation
    */
    $('.register form').submit(function(){
        $(this).find("label[for='ID']").html();
        $(this).find("label[for='sex']").html();
        $(this).find("label[for='name']").html();
        $(this).find("label[for='QQ']").html();
        $(this).find("label[for='Phone']").html();
        $(this).find("label[for='UserInfo']").html();
        ////
        var ID = $(this).find('input#ID').val();
        var sex = $(this).find('input#sex').val();
        var name = $(this).find('input#name').val();
        var QQ = $(this).find('input#QQ').val();
        var Phone = $(this).find('input#Phone').val();
        var UserInfo = $(this).find('input#UserInfo').val();

        function isNum(s)
        {
            var patrn= /^[0-9]{1,20}$/;
            if(!patrn.exec(s)) return false
            return true
        }


        if (ID == ''||isNaN(ID) ) {
            $(this).find("label[for='ID']").append("<span style='display:none' class='red'> - Please enter a valid studentsID. </span>");
            $(this).find("label[for='ID'] span").fadeIn('medium');
            return false;
        }
        if(sex == '') {
            $(this).find("label[for='sex']").append("<span style='display:none' class='red'> - Please enter if you are male or female or others.</span>");
            $(this).find("label[for='sex'] span").fadeIn('medium');
            return false;
        }
        if(name == '') {
            $(this).find("label[for='name']").append("<span style='display:none' class='red'> - Please enter a valid name.</span>");
            $(this).find("label[for='name'] span").fadeIn('medium');
            return false;
        }
        if(QQ == ''||!isNum(QQ)) {
            $(this).find("label[for='QQ']").append("<span style='display:none' class='red'> - Please enter a valid QQ.</span>");
            $(this).find("label[for='QQ'] span").fadeIn('medium');
            return false;
        }
        if(Phone == ''||!isNum(Phone)) {
            $(this).find("label[for='Phone']").append("<span style='display:none' class='red'> - Please enter a valid Phone.</span>");
            $(this).find("label[for='Phone'] span").fadeIn('medium');
            return false;
        }
        if (UserInfo == '') {
            $(this).find("label[for='UserInfo']").append("<span style='display:none' class='red'> - Please enter a right Userinfo.</span>");
            $(this).find("label[for='UserInfo'] span").fadeIn('medium');
            return false;
        }
    });


});


