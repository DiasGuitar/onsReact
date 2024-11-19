(function($) {
    "use strict";

    (function() {
        var method;
        var noop = function() {};
        var methods = [
            "assert",
            "clear",
            "count",
            "debug",
            "dir",
            "dirxml",
            "error",
            "exception",
            "group",
            "groupCollapsed",
            "groupEnd",
            "info",
            "log",
            "markTimeline",
            "profile",
            "profileEnd",
            "table",
            "time",
            "timeEnd",
            "timeline",
            "timelineEnd",
            "timeStamp",
            "trace",
            "warn",
        ];
        var length = methods.length;
        var console = (window.console = window.console || {});

        while (length--) {
            method = methods[length];

            // Only stub undefined methods.
            if (!console[method]) {
                console[method] = noop;
            }
        }
    })();

    /***********************************************************
     // Site Header Animation
    ************************************************************/

    $(function() {
        var header = $(".start-style");
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 10) {
                header.removeClass("start-style").addClass("scroll-on");
            } else {
                header.removeClass("scroll-on").addClass("start-style");
            }
        });
    });

    /***********************************************************
     // Smooth Scrolling
    ************************************************************/
    $(".smooth-scroll").on("click", function(e) {
        e.preventDefault();

        var target = "." + $(this).data("target");
        var $target = $(target);

        $("html, body").animate({
                scrollTop: $target.offset().top - $(".main-header").height(),
            },
            1000,
            "swing"
        );
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() != 0) {
            $(".scrollToTop").fadeIn();
        } else {
            $(".scrollToTop").fadeOut();
        }
    });

    /***********************************************************
      Menu On Hover
    ************************************************************/
    $("body").on("mouseenter mouseleave", ".nav-item", function(e) {
        if ($(window).width() > 750) {
            var _d = $(e.target).closest(".nav-item");
            _d.addClass("show");
            setTimeout(function() {
                _d[_d.is(":hover") ? "addClass" : "removeClass"]("show");
            }, 1);
        }
    });

    $(".dropdown-menu a.dropdown-toggle").on("click", function(e) {
        if (!$(this).next().hasClass("show")) {
            $(this)
                .parents(".dropdown-menu")
                .first()
                .find(".show")
                .removeClass("show");
        }
        var $subMenu = $(this).next(".dropdown-menu");
        $subMenu.toggleClass("show");

        $(this)
            .parents("li.nav-item.dropdown.show")
            .on("hidden.bs.dropdown", function(e) {
                $(".dropdown-submenu .show").removeClass("show");
            });

        return false;
    });
})(window.jQuery);