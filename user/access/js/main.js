// bắt sự kiện thêm dữ liệu vào localStorage
function search() {
  let header_search_input = document.getElementById("header_search_input");
  if (header_search_input.value == "") {
    alert("Bạn chưa nhập giá trị!");
  } else {
    // Lay gia tri hien co tu KHO
    let search = localStorage.getItem("search");
    if (search == null) {
      search_Obj = []; //Luu gia tri sau chuyen doi
    } else {
      search_Obj = JSON.parse(search);
    }
    // Them gia tri moi vao MANG
    search_Obj.push(header_search_input.value);
    // Luu lai gia tri sau cap nhat vao KHO
    localStorage.setItem("search", JSON.stringify(search_Obj));
    // Xoa FORM hien tai
    // header_search_input.value = "";
    // Hien thi lai DANH SACH
    // console.log(search_Obj)
    show_search();
  }
}
// hiển thị dữ liệu
function show_search() {
  let search = localStorage.getItem("search");
  if (search == null) {
    search_Obj = []; //Luu gia tri sau chuyen doi
  } else {
    search_Obj = JSON.parse(search);
  }
  let inner_search = "";
  search_Obj.forEach(function (element, index) {
    inner_search += `<div class="row mb-2 m-0">
          <div class="col-3">
            <a class="navbar-brand" href="#">
              <img
                src="./access/img/user10.png"
                style="border-radius: 40px"
                class="ms-3"
                height="40"
                alt=""
                loading="lazy"
              />
            </a>
          </div>
          <div class="col-5 d-flex flex-column">
            <a href=""><strong>${element}</strong></a>
            <small>${element}</small>
          </div>
          <div
            class="col-4 d-flex justify-content-end align-items-center"
          >
            <i class="fas fa-times pe-2" id="${index}" onclick="del_search(this.index)"></i>
          </div>
        </div>`;
  });
  // Xác định vị trí
  let search_root = document.getElementById("results_search");
  if (search_Obj.length > 0) {
    search_root.innerHTML = inner_search;
  } else {
    search_root.innerHTML = "<h2> Không có dữ liệu gì cả</h2>";
  }
}
// xóa tìm kiếm
function del_search(index) {
  let search = localStorage.getItem("search");
  if (search == null) {
    search_Obj = []; //Luu gia tri sau chuyen doi
  } else {
    search_Obj = JSON.parse(search);
  }
  search_Obj.splice(index, 1);
  localStorage.setItem("search", JSON.stringify(search_Obj));

  show_search();
}

// bắt sự kiện comment
function add_comment() {
  let comment_input = document.getElementById("comment_input");
  let comment_input_1 = document.getElementById("comment_input_1");
  if (comment_input.value == "" && comment_input_1.value == "") {
    alert("Bạn chưa nhập giá trị!");
  } else {
    // Lay gia tri hien co tu KHO
    let comment = localStorage.getItem("comment");
    if (comment == null) {
      comment_Obj = []; //Luu gia tri sau chuyen doi
    } else {
      comment_Obj = JSON.parse(comment);
    }

    // Them gia tri moi vao MANG
    comment_input.value == ""
      ? comment_Obj.push(comment_input_1.value)
      : comment_Obj.push(comment_input.value);
    // Luu lai gia tri sau cap nhat vao KHO
    localStorage.setItem("comment", JSON.stringify(comment_Obj));
    // Xoa FORM hien tai
    comment_input.value = "";
    comment_input_1.value = "";
    // Hien thi lai DANH SACH
    show_comment();
  }
}

function show_comment() {
  let comment = localStorage.getItem("comment");
  if (comment == null) {
    comment_Obj = []; //Luu gia tri sau chuyen doi
  } else {
    comment_Obj = JSON.parse(comment);
  }
  let inner_comment = "";
  comment_Obj.forEach(function (element, index) {
    inner_comment += `<div class="d-flex">
      <img
        src="./access/img/user.jpg"
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
          <strong>Tho_KD:</strong>${element}
        </p>
        <div class="d-flex">
          <p
            class="px-2 text-black-50 pt-2"
            style="font-size: 0.8rem"
          >
            vừa xong
          </p>
          <p
            class="px-2 pt-2"
            style="
              font-size: 0.8rem;
              color: #7a7878;
              font-weight: 500;
            "
          >
            0 lượt thích
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
      </div>
    </div>`;
  });
  // Xác định vị trí
  let comment_root = document.getElementById("resuld_comment");
  if (comment_Obj.length > 0) {
    comment_root.innerHTML = inner_comment;
  }
}

function show_content_share(){
  let share = localStorage.getItem("share");
    if (share == null) {
      share_Obj = []; //Luu gia tri sau chuyen doi
    } else {
      share_Obj = JSON.parse(share);
    }
    let inner_content_share = "";
    share_Obj.forEach(function (element, index){
      inner_content_share += `<figure class="figure border1">
      <!-- Image and text -->
      <nav class="d-flex align-items-center pt-2">
        <div class="container-fluid d-flex align-items-center">
          <a class="navbar-brand" href="#">
            <img
              src="./access/img/user.jpg"
              style="border-radius: 20px"
              class="me-2"
              height="40"
              alt=""
              loading="lazy"
            />
            <small>Tho_KD</small>
          </a>
          <i class="fas fa-ellipsis-h ms-auto"></i>
        </div>
      </nav>
      <hr />
      <img
        src="./access/img/user6.jpg"
        class="figure-img img-fluid shadow-3 mb-3 border content_img"
        alt="..."
      />
      <div class="d-flex content_icon">
        <i class="far fa-heart icon p-2 content_icon_love"></i>
        <i class="far fa-comment icon p-2"></i>
        <i class="fas fa-share icon p-2 text-black-50"></i>
        <i
          class="
            far
            fa-bookmark
            ms-auto
            icon
            p-2
            content_icon_bookmark
            text-black-50
          "
        ></i>
      </div>
      <div class="d-flex flex-column">
        <a href=""><strong class="px-2">0 lượt thích</strong></a>
        <p class="text px-2 m-0">
          <strong>Tho_KD:</strong> ${element}
        </p>
        <p
          class="px-2 text-black-50 m-0"
          data-mdb-toggle="modal"
          data-mdb-target="#exampleModal10"
          style="cursor: pointer;"
        >
          Xem tất cả bình luận
        </p>
        <!-- Modal -->
        <div
          class="modal top fade"
          id="exampleModal10"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          data-mdb-backdrop="true"
          data-mdb-keyboard="true"
        >
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-body">
                <div class="container-fluid">
                  <div class="row" style="height: 600px; overflow: auto; position: relative;">
                    <div class="col-5">
                      
                        <img
                        src="./access/img/user6.jpg"
                        alt=""
                        class="img-fluid"
                        style="position:fixed;width: 25%;height: 75%;"
                      />
                      
                     
                    </div>
                    <div class="col-7 position-relative p-0">
                      <div class="mod_header p-0 position-fixed bg-white">
                        <nav class="d-flex align-items-center">
                          <div
                            class="
                              container-fluid
                              d-flex
                              align-items-center
                            "
                            style="border-bottom: #dbdbdb solid 1px"
                          >
                            <a class="navbar-brand" href="#">
                              <img
                                src="./access/img/user.jpg"
                                style="border-radius: 20px"
                                class="me-2"
                                height="40"
                                alt=""
                                loading="lazy"
                              />
                              <small>Tho_KD</small>
                            </a>
                            <i
                              class="
                                fas
                                fa-ellipsis-h
                                position-absolute
                                end-0
                              "
                            ></i>
                          </div>
                        </nav>
                      </div>
                      <!-- for comment -->
                      <div class="modal-body mt-5 d-flex flex-column " style="padding-bottom: 165px; ">
                        <div class="d-flex">
                          <img
                            src="./access/img/user.jpg"
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
                              <strong>Tho_KD:</strong>${element}
                              
                            </p>
                            <p class="px-2 text-black-50 pt-3">
                              Vừa xong
                            </p>
                          </div>
                        </div>
                        <div class="comment">
                          <div class="" id="" >
                            <div class="d-flex">
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
                                    Vừa xong
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
                              </div>
                            </div>
                          </div>
                          <div class="" id="resuld_comment" ></div>
                        </div>
                      </div>
                      <div
                        class="
                          mod_footer
                          p-0
                          position-fixed
                          bg-white
                          d-flex
                          flex-column
                        "
                        style="bottom: 7%;"
                      >
                        <div class="d-flex content_icon">
                          <i
                            class="
                              far
                              fa-heart
                              icon
                              p-2
                              content_icon_love
                            "
                          ></i>
                          <i class="far fa-comment icon p-2"></i>
                          <i
                            class="fas fa-share icon p-2 text-black-50"
                          ></i>
                          <i
                            class="
                              far
                              fa-bookmark
                              ms-auto
                              icon
                              p-2
                              content_icon_bookmark
                              text-black-50
                            "
                          ></i>
                        </div>
                        <strong class="px-2">0 lượt thích</strong>
                        <p class="px-2 text-black-50">Vừa xong</p>
                        <div
                          class="d-flex align-items-center"
                          style="border-top: 1px solid #dbdbdb"
                        >
                          <i class="far fa-smile icon p-2"></i>
                          <input
                            type="text"
                            placeholder="Thêm bình luận"
                            class="flex-grow-1 input"
                            id="comment_input"
                            autocomplete="off"
                            
                          />
                          <span class="text-info px-2" onclick="add_comment()" style="cursor: pointer;">Đăng</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p class="px-2 text-black-50">Vừa xong</p>
      </div>

      <div
        class="d-flex align-items-center"
        style="border-top: 1px solid #dbdbdb"
      >
        <i class="far fa-smile icon p-2"></i>
        <input
          type="text"
          placeholder="Thêm bình luận"
          class="flex-grow-1 input"
          autocomplete="off"
          id="comment_input_1"
        />
        <span class="text-info px-2" onclick="add_comment()">Đăng</span>
      </div>
    </figure>  `
    })
      // Xác định vị trí
  let share_root = document.getElementById("result_share");
  if (share_Obj.length > 0) {
    share_root.innerHTML = inner_content_share;
  }
}

// jquery
$(document).ready(function () {

  $(".sidebar_follow").click(function () {
    val = $(this).text();
    if (val == "Theo dõi") {
      $(this).text("Đang theo dõi");
    }
    //click hủy theo dỏi
    else {
      //show modal hủy
      $("#exampleModal1").modal("show", function () {});
      //click nút hủy
      $(document).on("click", "#huy", function () {
        $("#exampleModal1").modal("hide");
      });
      // click nút theo dõi
      $(document).on("click", "#huy_follow", function () {
        $("#theodoi1").text("Theo dõi");
        $("#exampleModal1").modal("hide");
      });
    }
  });
  //show modal baif viet
  $(".fa-plus-square").click(function(){
    $("#exampleModal2").modal("show",function(){
     
    });
  })
  $(".btn_share").click(function(){
    if ($(".content_share").val() == "") {
      alert("Bạn chưa nhập giá trị!");}
    else{
      // Lay gia tri hien co tu KHO
    let share = localStorage.getItem("share");
    if (share == null) {
      share_Obj = []; //Luu gia tri sau chuyen doi
    } else {
      share_Obj = JSON.parse(share);
    }
    // Them gia tri moi vao MANG
    share_Obj.push($(".content_share").val());
    // Luu lai gia tri sau cap nhat vao KHO
    localStorage.setItem("share", JSON.stringify(share_Obj));
    // Xoa FORM hien tai
    $(".content_share").val("")
    // Hien thi lai DANH SACH
    // console.log(search_Obj)
    show_content_share();
    }
  })


  // click show nội dung
  $(".content_add").click(function () {
    $(this).text(
      "elit.Cum doloremque officia laboriosam. Itaque ex obcaecati architecto! Qui necessitatibus delectus placeat illo rem id nisi consequatur esse, sint perspiciatis soluta porro?"
    );
  });
  // click thả và ẩn tim
  $(".content_icon_love").click(function () {
    if ($(this).hasClass("far")) {
      $(this).removeClass("far");
      $(this).addClass("fas");
    } else {
      $(this).removeClass("fas");
      $(this).addClass("far");
    }
  });
  // click lưu
  $(".content_icon_bookmark").click(function () {
    if ($(this).hasClass("far")) {
      $(this).removeClass("far");
      $(this).addClass("fas");
    } else {
      $(this).removeClass("fas");
      $(this).addClass("far");
    }
  });
  //click hiện form tìm kiếm
  $(".header_search_input").click(function () {
    if (
      $(".header_search").hasClass("d-none") &&
      $(".header_search_icon").hasClass("d-none")
    ) {
      $(".header_search").removeClass("d-none");
      $(".header_search").addClass("d-block");
      $(".header_search_icon").removeClass("d-none");
      $(".header_search_icon").addClass("d-block");
    } else {
      $(".header_search").addClass("d-none");
      $(".header_search").removeClass("d-block");
      $(".header_search_icon").addClass("d-none");
      $(".header_search_icon").removeClass("d-block");
    }
  });
  // $(".header_search_icon").click(function(){
  //     $(".header_search").addClass("d-none")
  //     $(".header_search").removeClass("d-block")
  //     $(".header_search_icon").addClass("d-none")
  //     $(".header_search_icon").removeClass("d-block")
  // })
  // click tìm kiếm
  $("#header_search_input").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#results_search .row").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });

  $(".btn_add_comment").click(function () {
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
        
      </div>`);
    //   $(this).addClass("d-none")
  });
});
