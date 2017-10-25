/* main category */
function iframeBtnControl() {
    //var $buyBtn = $('#smileLinker_btn_control');
    var $buyBtn = $('.button--normal.button--buy');
    $buyBtn.on("click", function() {
       console.log("구매하기버튼 클릭");
    })

}


$(document).ready(function(){

    iframeBtnControl();




});
