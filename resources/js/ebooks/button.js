$("button").click(function(){
    $("try").each(function(){
        $(this).attr("src", $(this).data("src"));
    });
});