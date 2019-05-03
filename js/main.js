$(document).ready(function () {


    $("li.poster-medium").on("click", function () {
        $("#map").css({"height": "calc(915px*0.8)", "width": "calc(610px*0.8)"});
$("#ramka").css({"width": "calc(610px*0.8)"});
    });

 $("li.poster-small").on("click", function () {
        $("#map").css({"height": "700px", "width": "500px"});
$("#ramka").css({"width": "500px"});
    });
    
     $("li.poster-large").on("click", function () {
        $("#map").css({"height": "calc(1000px*0.75)", "width": "calc(700px*0.75)"});
$("#ramka").css({"width": "calc(700px*0.75)"});
    });
        $("li.poster-xlarge").on("click", function () {
        $("#map").css({"height": "calc(1200px*0.65)", "width": "calc(1000px*0.65)"});
$("#ramka").css({"width": "calc(1000px*0.65)"});
    });
    
});