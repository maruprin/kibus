let current = 0;

const card = document.getElementsByClassName('child');
const back = document.getElementById('prev-button');
const next = document.getElementById('next-button');
back.onclick = () => {
  console.log('prev');
  if (current > 0)
  card[--current].scrollIntoView({behavior: "smooth"});
};
next.onclick = () => {
if (current < card.length - 1)
  card[++current].scrollIntoView({behavior: "smooth"});
};

next.addEventListener("click", () => {
  next.classList.remove("sliderContainer-dog__btn--next");
  arrayBotones[indice].classList.remove("slide__btn--disabled");

 arrayImages[indice].classList.add("slide__img--active");
  arrayBotones[indice].classList.add("slide__btn--active");
})