(function($) {
    "use strict";

    var navbar = $("#navbar");
    var y_pos = navbar.offset().top;
    var height = navbar.height();
    var link = $("#navbar ul li a");

    $(document).scroll(function() {
        var scrollTop = $(this).scrollTop();

        if (scrollTop > y_pos + height) {
            navbar.addClass("navbar-fixed");
            link.addClass("navbar-nopadding");
        } else if (scrollTop <= y_pos  + height) {
            navbar.removeClass("navbar-fixed").clearQueue();
            link.removeClass("navbar-nopadding").clearQueue();
        }
    });

})(jQuery, undefined);
