// window.onload = function () {};
window.addEventListener("load", function () {
  // 헤더 마이페이지 클릭시 마이페이지 리스트 보임
  const mypageBtn = this.document.querySelector(".mypageBt");
  const mypageList = this.document.querySelector(".mypage-list");
  mypageBtn.addEventListener("click", function () {
    // console.log("click");
    mypageList.classList.toggle("showMypage");
  });
  //   swiper
  const swTour = new Swiper(".sw-tour", {
    slidesPerView: 1.5,
    spaceBetween: 20,

    grid: {
      rows: 3,
      fill: "row",
    },
    breakpoints: {
      480: {
        spaceBetween: 32,
        slidesPerView: 2.5,
        grid: {
          rows: 1,
        },
      },
      //   1024: {
      //     slidesPerView: 2.5,
      //     spaceBetween: 26,
      //     // grid: {
      //     //   rows: 3,
      //     // },
      //   },
      1280: {
        slidesPerView: 3.5,
        spaceBetween: 26,
        slidesPerGroup: 2,
        grid: {
          rows: 1,
        },
      },
    },
  });
});
