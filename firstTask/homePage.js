const rightArr = document.getElementById("nextArr");
const leftArr = document.getElementById("prevArr");
const scrollSlider = document.getElementById("videoSlider");

leftArr.addEventListener("click", () => {
  scrollSlider.scrollToNext(100);
});
rightArr.addEventListener("click", () => {
  scrollSlider.scrollToRight(100);
});


const nextArr = document.getElementById("recommendationNextArr");
const prevArr = document.getElementById("recommendationPrevArr");
const recommendationSlider = document.getElementById(
  "recommendationVideoSlider"
);

nextArr.addEventListener("click", () => {
  recommendationSlider.scrollToNext(100);
});
prevArr.addEventListener("click", () => {
  recommendationSlider.scrollToRight(100);
});


const nextRecArr = document.getElementById("nextRecArr");
const prevRecArr = document.getElementById("prevRecArr");
const recVideoSlider = document.getElementById("recVideoSlider");

nextRecArr.addEventListener("click", () => {
  recVideoSlider.scrollToNext(100);
});
prevRecArr.addEventListener("click", () => {
  recVideoSlider.scrollToRight(100);
});
