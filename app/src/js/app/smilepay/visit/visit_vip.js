/* main category */
function iframeBtnControl() {
    var $buyBtn = $('#smileLinker_btn_control'),
         $iframeTarget = $('#vip_frame') ;

     $buyBtn.on("click", function() {
       console.log("구매하기버튼 클릭");
       $iframeTarget.attr('src', 'http://localhost:8889/html/app/smilepay/page__visitVIP_buyfinish.html');
    })




}


$(document).ready(function(){

    iframeBtnControl();

    //request iframe url
    var paramUrl = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    var itemNumber = paramUrl[0].split('dealNumber=')[1];
    if(itemNumber != undefined ) $('#vip_frame').attr('src','http://mitem.auction.co.kr/vip?itemNo='+itemNumber )
});
