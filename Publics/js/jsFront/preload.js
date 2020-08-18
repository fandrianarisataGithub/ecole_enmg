$(window).on('load', function () {

    $("#chargement").fadeOut(2000, function() {
        $("body").css({
            overflow: "auto"
        });

        $("#wrapper").animate({
            opacity: "1"
        },1000, function() {
            $("#chargement").remove();
        });

    });

});