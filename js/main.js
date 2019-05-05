$(document).ready(function () {

            //oprogramowanie rozmiarów

            $("li.poster-medium").on("click", function () {
                $("#map").css({
                    "height": "calc(915px*0.83)",
                    "width": "calc(610px*0.83)"

                });
                $("#ramka").css({
                    "width": "calc(610px * 0.83)"
                });
            });

            $("li.poster-small").on("click", function () {
                $("#map").css({
                    "height": "700px",
                    "width": "500px"
                });
                $("#ramka").css({
                    "width": "500px"
                });
            });

            $("li.poster-large").on("click", function () {
                $("#map").css({
                    "height": "calc(1000px*0.8)",
                    "width": "calc(700px*0.8)"
                });
                $("#ramka").css({
                    "width": "calc(700px*0.8)"
                });
            });

            $("li.poster-xlarge").on("click", function () {
                $("#map").css({
                    "height": "calc(1200px*0.67)",
                    "width": "calc(1000px*0.67)"
                });
                $("#ramka").css({
                    "width": "calc(1000px*0.67)"
                });

            });
            //oprogramowanie orientacji

            var pheight = $("#map").css("height");
            var pwidth = $("#map").css("width");

            $("li.poster-horizontal").on("click", function () {
                $("#map").css({
                    "height": pwidth,
                    "width": pheight
                });
                $("#ramka").css({
                    "width": pheight
                });
            });
    
    $("li.poster-vertical").on("click", function () {
                $("#map").css({
                    "height": pheight,
                    "width": pwidth
                });
                $("#ramka").css({
                    "width": pwidth
                });
            });
      });