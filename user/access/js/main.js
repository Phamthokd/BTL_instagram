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
    $(".header_search_input").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".header_search_content .row").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    $(".btn_add_comment").click(function(){
        $(".comment").append(`<div class="d-flex ">
        <img
          src="./access/img/user9.jpg"
          class="m-2"
          alt=""
          style="
            height: 40px;
            width: 40px;
            border-radius: 20px;
          "
        />
        <div class="">
          <p class="text px-2 m-0 pt-2">
            <strong>Ronaldo:</strong> very handsome !!!
          </p>
          <div class="d-flex">
            <p
              class="px-2 text-black-50 pt-2"
              style="font-size: 0.8rem"
            >
              3 ngày
            </p>
            <p
              class="px-2 pt-2"
              style="
                font-size: 0.8rem;
                color: #7a7878;
                font-weight: 500;
              "
            >
              40 lượt thích
            </p>
            <p
              class="px-2 pt-2"
              style="
                font-size: 0.8rem;
                color: #7a7878;
                font-weight: 500;
              "
            >
              trả lời
            </p>
          </div>
          <p
            class="px-2 pt-2"
            style="
              font-size: 0.8rem;
              color: #7a7878;
              font-weight: 500;
            "
          >
           ---- Ẩn câu trả lời
          </p>
          <div class="">
            <div class="d-flex">
              <img
                src="./access/img/user7.jpg"
                class="m-2"
                alt=""
                style="
                  height: 40px;
                  width: 40px;
                  border-radius: 20px;
                "
              />
              <div class="">
                <p class="text px-2 m-0 pt-2">
                  <strong>Sontungmtp:</strong> Thank you                  
                </p>
                
              </div>
            </div>
            <div class="d-flex">
              <img
                src="./access/img/user6.jpg"
                class="m-2"
                alt=""
                style="
                  height: 40px;
                  width: 40px;
                  border-radius: 20px;
                "
              />
              <div class="">
                <p class="text px-2 m-0 pt-2">
                  <strong>Luc_VP:</strong> Hello idol                  
                </p>
                
              </div>
            </div>
          </div>
          
        </div>
        
      </div>`)
    //   $(this).addClass("d-none")
    })

})