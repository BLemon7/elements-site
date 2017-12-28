$(document).ready(function () {

    // set up the button to toggle key display
    $("#filter-elements").click(function () {
        $("#key-expander").slideToggle("slow", function () {});
    });

    $("#clear-filter").click(function () {
        if ($("#key-expander").is(":visible")) {
            $("#key-expander").slideToggle("slow", function () {});
        }
        $(".periodic-table li").removeClass("blurred-element");
    });

    $("#unusual-elements").click(function () {
        // add the blurred class to everything
        $(".periodic-table li").addClass("blurred-element");
        // remove the blurred class from any li that have an anchor
        $("a").parent('li').removeClass('blurred-element');
    });

    // set the border on any li elements tags that have links
    $("a").parent().addClass("linkable-li");


});

function showElements(elem) {
    var className = elem.className;
    // remove the blurred class for everything
    $(".periodic-table li").removeClass("blurred-element");

    // add the blurred class to anythign that is not the class passed in
    $(".periodic-table li").not("." + elem.className).addClass("blurred-element");
    $("#key-expander").slideToggle("slow", function () {});
}
