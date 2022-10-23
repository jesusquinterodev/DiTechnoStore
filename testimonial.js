const testiSlider = document.querySelector("#testimonial");
let testiSliderSection = document.querySelectorAll(".testi-content");
let testiSliderSectionLast = testiSliderSection[testiSliderSection.length - 1];

const testiBtnLeft = document.querySelector("#arrow-left");
const testiBtnRight = document.querySelector("#arrow-right");

testiSlider.insertAdjacentElement("afterbegin", testiSliderSectionLast);

function testiNext() {
  let testiSliderSectionFirst = document.querySelectorAll(".testi-content")[0];
  testiSlider.style.marginLeft = "-200%";
  testiSlider.style.transition = "all 0.5s";
  setTimeout(function () {
    testiSlider.style.transition = "none";
    testiSlider.insertAdjacentElement("beforeend", testiSliderSectionFirst);
    testiSlider.style.marginLeft = "-100%";
  }, 500);
}

function testiPrev() {
  let testiSliderSection = document.querySelectorAll(".testi-content");
  let testiSliderSectionLast =
    testiSliderSection[testiSliderSection.length - 1];
  testiSlider.style.marginLeft = "0%";
  testiSlider.style.transition = "all 0.5s";
  setTimeout(function () {
    testiSlider.style.transition = "none";
    testiSlider.insertAdjacentElement("afterbegin", testiSliderSectionLast);
    testiSlider.style.marginLeft = "-100%";
  }, 500);
}

testiBtnRight.addEventListener("click", function () {
  testiNext();
});

testiBtnLeft.addEventListener("click", function () {
  testiPrev();
});

setInterval(function () {
  testiNext();
}, 5000);
