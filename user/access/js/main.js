$(document).ready(function(){
    $(".sidebar_follow").click(function(){
        $(this).text("Đang theo dõi")    
    })
    $(".content_add").click(function(){
        $(this).text("elit.Cum doloremque officia laboriosam. Itaque ex obcaecati architecto! Qui necessitatibus delectus placeat illo rem id nisi consequatur esse, sint perspiciatis soluta porro?")
    })
    $('.content_icon_love').click(function(){
        if($(this).hasClass('far')){
            $(this).removeClass('far')
            $(this).addClass('fas')
             
        }else{
            $(this).removeClass('fas')
            $(this).addClass('far') 
        }
    })
    $('.content_icon_bookmark').click(function(){
        if($(this).hasClass('far')){
            $(this).removeClass('far')
            $(this).addClass('fas')
             
        }else{
            $(this).removeClass('fas')
            $(this).addClass('far') 
        }
    })
    $(".header_search_input").click(function(){
        if($(".header_search").hasClass("d-none") && $(".header_search_close").hasClass("d-none")){
            $(".header_search").removeClass("d-none")
            $(".header_search").addClass("d-block")
            $(".header_search_close").removeClass("d-none")
            $(".header_search_close").addClass("d-block")
        }else{
            $(".header_search").addClass("d-none")
            $(".header_search").removeClass("d-block")
            $(".header_search_close").addClass("d-none")
            $(".header_search_close").removeClass("d-block")
        }
    })
    $(".header_search_close").click(function(){
        $(".header_search").addClass("d-none")
        $(".header_search").removeClass("d-block")
        $(".header_search_close").addClass("d-none")
        $(".header_search_close").removeClass("d-block")
    })
})