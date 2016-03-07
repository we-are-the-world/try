(function () {
    $(document).ready(function () {
        $("#fullpage").fullpage({
            navigation: true,
            afterLoad: function(archorLink, index) {
                if(index == 2) {
                    $('.section2 .from_top')
                        .removeClass('hide')
                        .animate({top: '0'}, 1000);
                }
            },
            onLeave: function(index, direction) {
                if(index == 2) {
                    $('.section2 .from_top')
                        .addClass('hide')
                        .animate({top: '-120%'}, 1000);
                }
            }
        });
    });
})();
