$(function(){
    $(".pic").on("click",function(){

        $(this).siblings(".modal").fadeIn();
        $("#bg").fadeIn();
        $("span").on("click",function(){
            $(".modal").fadeOut();
            $("#bg").fadeOut();
        })
    })
})