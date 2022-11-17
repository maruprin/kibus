let current = 0;

const card = document.getElementsByClassName("child");
const back = document.getElementById("prev-button");
const next = document.getElementById("next-button");
back.onclick = () => {
  if (current > 0) card[--current].scrollIntoView({ behavior: "smooth" });
};
next.onclick = () => {
  if (current < card.length - 1)
    card[++current].scrollIntoView({ behavior: "smooth" });
};

next.addEventListener("click", () => {
  next.classList.remove("sliderContainer-dog__btn--next");
  next.classList.add("sliderContainer-dog__btn--next--active");
  back.classList.remove("sliderContainer-dog__btn--prev--active");
  back.classList.add("sliderContainer-dog__btn--prev");
  

});
back.addEventListener("click", () => {
  back.classList.remove("sliderContainer-dog__btn--prev");
  back.classList.add("sliderContainer-dog__btn--prev--active");
  next.classList.remove("sliderContainer-dog__btn--next--active");
  next.classList.add("sliderContainer-dog__btn--next");

});
