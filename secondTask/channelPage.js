
const nextRecArr = document.getElementById("nextArr");
const prevRecArr = document.getElementById("prevArr");
const recVideoSlider = document.getElementById("videoSlider");

nextRecArr.addEventListener("click", () => {
  recVideoSlider.scrollToNext(100);
});
prevRecArr.addEventListener("click", () => {
  recVideoSlider.scrollToRight(100);
});
