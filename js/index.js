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


    $(".driver-movebtn").hide();

    $(".team-btn").click(function () {
        $(this).addClass("tabact").siblings().removeClass("tabact");

        $(".teams").fadeIn(50);
        $(".drivers").fadeOut(50);
        $(".team-movebtn").show();
        $(".driver-movebtn").hide();
    });

    $(".driver-btn").click(function () {
        $(this).addClass("tabact").siblings().removeClass("tabact");

        $(".drivers").fadeIn(50);
        $(".teams").fadeOut(50);
        $(".driver-movebtn").show();
        $(".team-movebtn").hide();
    });

    $(".team-left, .driver-left").mouseover(function () {
        $(this).find("img").attr("src", "images/team/left_colored.png");
    }).mouseleave(function () {
        $(this).find("img").attr("src", "images/team/left.png");
    });

    $(".team-right, .driver-right").mouseover(function () {
        $(this).find("img").attr("src", "images/team/right_colored.png");
    }).mouseleave(function () {
        $(this).find("img").attr("src", "images/team/right.png");;
    });

    $(".team:last-child").insertBefore(".team:first-child");

    $(".teams").css("left", "-1210px");

    $(".driver:last-child").insertBefore(".driver:first-child");

    $(".drivers").css("left", "-1210px");

    $(".team-right").click(function () {
        $(".teams").stop().animate({
            left: "-=1110px"
        }, function () {
            $(".team:first-child").insertAfter(".team:last-child");
            $(".teams").css("left", "-1210px");
        });
    });

    $(".team-left").click(function () {
        $(".teams").stop().animate({
            left: "+=1110px"
        }, function () {
            $(".team:last-child").insertBefore(".team:first-child");
            $(".teams").css("left", "-1210px");
        });
    });

    $(".driver-right").click(function () {
        $(".drivers").stop().animate({
            left: "-=1110px"
        }, function () {
            $(".driver:first-child").insertAfter(".driver:last-child");
            $(".drivers").css("left", "-1210px");
        });
    });

    $(".driver-left").click(function () {
        $(".drivers").stop().animate({
            left: "+=1110px"
        }, function () {
            $(".driver:last-child").insertBefore(".driver:first-child");
            $(".drivers").css("left", "-1210px");
        });
    });




    $(".country").click(function (e) {


        e.preventDefault();

        /*$(this).siblings().css("width", "140px").children(".exposure").fadeIn().next(".hidden").fadeOut();
        $(this).css("width", "420px").children(".exposure").fadeOut().next(".hidden").fadeIn();*/

        $(".country").removeClass("keep");
        $(this).addClass("active").siblings().removeClass("active");
        $(".active").children(".hidden").fadeIn(2000).parents(".active").siblings().children(".hidden").hide();
    });

    $(".country-wrap").draggable({
        axis: "x"
    });

    $(".country-wrap").css({
        transition: "all .3s ease-out"
    });

    var imgwid = $(".country").width() / 2;

    $("html, body").on("mouseup mousemove", function () {

        var mpos = $(".country-wrap").offset().left;

        var fpoint = $(window).width() / 2;

        var lpoint = $(".country-wrap").width() - fpoint;

        if (mpos > fpoint) {
            $(".country-wrap").css({
                left: fpoint - imgwid + "px"
            });
        } else if (mpos < -lpoint) {
            $(".country-wrap").css({
                left: -lpoint + imgwid + "px"
            });
        }
    });

    $(".sns p").click(function () {
        $(this).addClass("act").siblings().removeClass("act");

    });

    $(".instagram").click(function () {
        $(".insta").fadeIn();
        $(".facebook, .twitter").fadeOut();
    });

    $(".face").click(function () {
        $(".facebook").fadeIn();
        $(".insta, .twitter").fadeOut();
    });

    $(".twit").click(function () {
        $(".twitter").fadeIn();
        $(".facebook, .insta").fadeOut();
    });


});




var pno = 0;
const totpno = 7;
var psts = 0;

$(function () {


    $(document).on("mousewheel DOMMouseScroll", function (e) {

        e.preventDefault();

        if (psts === 1) return false;
        psts = 1;

        var evt = window.event || e;
        var delta = evt.detail ? evt.detail : evt.wheelDelta;

        if (/Firefox/i.test(navigator.userAgent)) {
            delta = -evt.originalEvent.detail;
        }

        if (delta > 0) {
            pno--;
            if (pno === -1) pno = 0;

        } else {
            pno++;
            if (pno === totpno) pno = totpno - 1;
        }

        var pagepos = $(".sec").eq(pno).offset().top;

        $("html,body").stop().animate({
            scrollTop: pagepos + "px"
        }, 800, "easeInOutQuint", function () {
            psts = 0;
        });

    });


});
