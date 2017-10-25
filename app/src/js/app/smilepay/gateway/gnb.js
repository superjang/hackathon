/* main category */
function openGnb() {
    console.log("클릭했습니다.");
    var $btn = $(".open_menu"),
        $gnb = $("#gnb"),
        $bg = $(".gnb_bg"),
        $closed = $(".gnb .closed, .gnb_bg");
    $speed = 200;
    $btn.on("click", function() {
        $bg.show();
        $gnb.addClass("opened");
        $("html").addClass("ovh");
        $gnb.animate({marginLeft: "0"}, $speed)
        $(".bt_close").attr("tabindex", "-1");
    })
    $closed.on("click focusout touchend", function() {
        $("html").removeClass("ovh");
        $gnb.removeClass("opened");
        $gnb.animate({marginLeft: "-76%"}, $speed)
        $bg.hide();
        $(".bt_close").removeAttr("tabindex");
        $btn.focus();
    })


}



$(document).ready(function(){

    openGnb(); /* 햄버거메뉴 */

});
