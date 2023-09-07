
const ul = document.querySelector("ul");
const liItems = document.querySelectorAll("li");
const btnAdd = document.querySelector("button");
btnAdd.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "something new to do";
  ul.prepend(li);
});

ul.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.tagName === "LI") {
    e.target.remove();
  }
});