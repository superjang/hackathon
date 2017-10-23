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

    toggleSnsList: function(event){
        event.preventDefault();
        var boxShareSns = $(event.currentTarget)
        if(boxShareSns.hasClass('on')){
            boxShareSns.removeClass('on')
        }else{
            boxShareSns.addClass('on')
        }
    }

};

new SnsShare();