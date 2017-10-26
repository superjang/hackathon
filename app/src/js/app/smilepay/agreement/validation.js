/* main category */
function openCheck() {
    console.log("체크박스 바인드");
     var $checkbox = $(".agreement .agree_list").find("input[type=checkbox]"),
         $checkboxlength = $checkbox.length,
         $btn = $(".agreement .btn_agreement");

    $checkbox.on("click", function() {
        var cnt = 0;
        for(i=0; i < $checkboxlength; i++) {
            if($checkbox[i].checked) cnt++;
        }
        if(cnt == 2) {
            $btn.addClass("active");
        }else{
            $btn.removeClass("active");
        }
    })
    $btn.on("click", function() {
        if($(this).hasClass("active")){
            layerPopup("짝짝짝!\n" +
                "스마일링커가 되신 걸 \n" +
                "환영합니다. \n");
        }else{
            layerPopup("이용약관에 모두 \n 동의하셔야합니다.");
        }
    })

}

function layerPopup(msgText){
    var popupHtml = "";
    popupHtml += '<div id="dimmed"></div>'
    popupHtml += '<div id="layer_popup" class="active">'
    popupHtml +=    '<p class="msg">'
    popupHtml +=         msgText
    popupHtml +=    '</p>'
    popupHtml +=    '<a href="/html/app/smilepay/page__dashboard.html#share" class="confirm">확인</a>'
    popupHtml +=  '</div>';
    $('body').append(popupHtml);
    $("#layer_popup").addClass("active");

    $("#layer_popup .confirm").on("click", function() {
        if($('body').hasClass('page__dashboard_list')) {
          console.log("나만됨");
          $('.basic_infomation .user_area .linker_cash .number').text('0');
          $('.progress_percent .number').text('0');
        $('.progress').find('canvas').hide();

        }else{

        }
        $(this).closest("#layer_popup").remove();
        $("#dimmed").remove();

    })




}

$(document).ready(function(){

    if($(".agreement").length > 0 ) openCheck();




});
