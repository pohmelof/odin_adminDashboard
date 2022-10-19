const mentionsBlock = document.querySelector(".mentions");
const closeBtn = document.querySelector(".close");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    mentionsBlock.classList.add("show");
  }, 1000);
});

closeBtn.addEventListener("click", () => {
  mentionsBlock.classList.add("hide");
});
