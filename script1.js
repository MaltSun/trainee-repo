export default class ScrollSlider extends HTMLElement {
  get slides() {
    return [...this.querySelectorAll(".slide")];
  }

  scrollByAmount(amount) {
    this.scrollBy({ left: amount, behavior: "smooth" });
    console.log("next");
  }
  scrollToNext() {
    this.scrollByAmount(100);
  }
  scrollToRight(){
    this.scrollByAmount(-100);
  }
}

customElements.define("slider-scroll", ScrollSlider);
