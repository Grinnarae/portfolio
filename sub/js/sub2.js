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


    /*$(".menu>li").mouseover(function () {
        $(this).children(".smenu").show();
    }).mouseleave(function () {
        $(this).children(".smenu").hide();
    });*/

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


    $(".year").first().show();


    $(".sub-title h2").click(function () {
        $(this).addClass("sub-title-act").siblings().removeClass("sub-title-act");

        var year = $(this).text().substr(0, 4);
        console.log(year);

        var Yyear = '$("Y' + year + '")';
        //var Yyear = $("Y"+year);
        //var Yyear = "Y" + year;
        console.log(Yyear);

        var h2idx = $(this).index();
        console.log(h2idx);

        $(".year").eq(h2idx).show().siblings().hide();

    });

});
