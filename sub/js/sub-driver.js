$(document).ready(function () {





    $(".tab").click(function (e) {
        e.preventDefault();

        $("header").animate({
            left: "1320px"
        }, 600, function () {
            $(".tab").css("display", "none");
            $(".close").css("display", "block");
        });

        /* $(".menu-bg").stop().animate({
             left: 0
         }, 1600);*/

        $(".menu-bg").stop().delay(1000).slideDown(800);

        $(".menu-logo").stop().delay(200).animate({
            left: "35px"
        }, 1600);

        $(".menu>li:nth-child(1)").stop().delay(600).animate({
            marginLeft: 0,
            opacity: 1
        });

        $(".menu>li:nth-child(2)").stop().delay(650).animate({
            marginLeft: 0,
            opacity: 1
        });

        $(".menu>li:nth-child(3)").stop().delay(700).animate({
            marginLeft: 0,
            opacity: 1
        });

        $(".menu>li:nth-child(4)").stop().delay(750).animate({
            marginLeft: 0,
            opacity: 1
        });

        $(".menu>li:nth-child(5)").stop().delay(800).animate({
            marginLeft: 0,
            opacity: 1
        });

        $(".menu>li:nth-child(6)").stop().delay(850).animate({
            marginLeft: 0,
            opacity: 1
        });
    });

    $(".close").click(function (e) {
        e.preventDefault();

        $("header").animate({
            left: "0"
        }, function () {
            $(".tab").css("display", "block");
            $(".close").css("display", "none");
        });

        /*$(".menu-bg").stop().delay(1000).css("left", "-100%");*/
        $(".menu-bg").stop().delay(1000).css("display", "none");
        $(".menu-logo").stop().delay(1000).css("left", "-100%");
        $(".smenu").css("opacity", "0");
        $(".menu>li").animate({
            opacity: 0,
            marginLeft: "-500px"
        });
        $(".menu>li>a").removeClass("menu-act");
    });


    $(".menu>li>a").click(function (e) {
        e.preventDefault();

        /*$(this).parents("li").siblings().children(".smenu").hide();*/

        /*$(this).next(".smenu").fadeIn().parents("li").siblings().children(".smenu").hide();*/
        /*$(this).next(".smenu").parent("li").siblings().children(".smenu").hide();*/

        $(this).next(".smenu").animate({
            left: "300px",
            opacity: 1
        }).show();

        $(this).next(".smenu").parents("li").siblings().children(".smenu").stop().css({
            left: "200px",
            opacity: 0
        }).hide();

        $(this).addClass("menu-act").parents("li").siblings().children("a").removeClass("menu-act");
    });




    $(".right").mouseover(function () {
        $(this).find("img").attr("src", "images/driverteam/right_colored.png");
    }).mouseleave(function () {
        $(this).find("img").attr("src", "images/driverteam/right.png");;
    });

    $(".left").mouseover(function () {
        $(this).find("img").attr("src", "images/driverteam/left_colored.png");
    }).mouseleave(function () {
        $(this).find("img").attr("src", "images/driverteam/left.png");;
    });

    var imgW = $(".slider img").width();


    $(".slider div:first-child").insertBefore(".slider div:last-child");
    $(".slider").css("margin-left", -imgW);

    $(".left").click(function () {
        $(".slider").stop().animate({
            marginLeft: "+=" + imgW
        }, function () {
            $(".slider div:last-child").insertBefore(".slider div:first-child");
            $(".slider").css("margin-left", -imgW);
        });
    });

    $(".right").click(function () {
        $(".slider").stop().animate({
            marginLeft: "-=" + imgW
        },function(){
            $(".slider div:first-child").insertAfter(".slider div:last-child");
            $(".slider").css("margin-left",-imgW);
        });
    });


});
