var GNB = function(){
    this.init();
};

GNB.prototype = {
    init: function(){
        this.cacheDom();
        this.setEvent();
    },

    cacheDom: function(){
        this.$dom = {
            window: $(window),
            body: $('body'),
            gnb: $('#app__global_navigation')
        };
    },

    setEvent: function(){
        this.$dom.body.on('gnb:toggle', $.proxy(this.toggleGnb, this));
    },

    toggleGnb: function(){
        this.$dom.gnb.toggleClass('on');
    }
}

new GNB();


//$("#app__global_navigation").trigger('gnb:toggle')
