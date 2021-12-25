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
  if (comment_input.value == "" && comment_input_1.value=="") {
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
    comment_input.value==""?comment_Obj.push(comment_input_1.value):comment_Obj.push(comment_input.value)
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
    comment_Obj.forEach(function(element,index){
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
          <strong>Tho_KD:</strong>${element} !!!
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
    </div>`
    })
     // Xác định vị trí
  let comment_root = document.getElementById("resuld_comment");
  if (comment_Obj.length > 0) {
    comment_root.innerHTML = inner_comment;}
}
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
