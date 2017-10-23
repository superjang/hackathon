var SnsShare = function(){
    this.init();
};

SnsShare.prototype = {
    init: function(){
        this.cacheDom();
        this.setEvent();
    },

    cacheDom: function(){
        this.$dom = {
            boxShareSns: $('.box__share_sns')
        }
    },

    setEvent: function(){
        this.$dom.boxShareSns.on('click', $.proxy(this.toggleSnsList, this));
    },

    toggleSnsList: function(params){
        if($(this).hasClass('on')){
            $(this).removeClass('on')
        }else{
            $(this).addClass('on')
        }
    }

};

new SnsShare();