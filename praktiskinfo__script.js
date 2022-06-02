const article__dropdown__button =
  document.querySelectorAll(".dropdown__button");
const article__dropdown = document.querySelectorAll(".dropdown");

article__dropdown__button.forEach((i) => {
  i.addEventListener("click", () => {
    if (i.nextElementSibling.classList.contains("hidden") == true) {
      i.nextElementSibling.classList.replace("hidden", "active");
    } else {
      i.nextElementSibling.classList.replace("active", "hidden");
    }
  });
});
