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
        this.$dom.boxShareSns
            .on('click', '.button__share_list', $.proxy(this.toggleSnsList, this))
            .on('click', '.list__sns .button__share_sns', $.proxy(this.shareSns, this))
    },

    toggleSnsList: function(event){
        event.stopPropagation();
        event.preventDefault();
        var boxShareSns = $(event.currentTarget).parents('.box__share_sns');
        if(boxShareSns.hasClass('on')){
            boxShareSns.removeClass('on')
        }else{
            boxShareSns.addClass('on')
        }
    },

    shareSns: function(event){
        var target = $(event.currentTarget);
        console.log(target.data('sns-type'))

    }
};

new SnsShare();