let input = document.querySelector(".input");
let add = document.querySelector(".add");
let list = document.querySelector(".list");
let form = document.querySelector(".form");

let resArr = [];
add.addEventListener("click", () => {
  console.log("start");
  let new_li = document.createElement("li");
  list.append(new_li);
  new_li.innerHTML = input.value;
  let new_btn = document.createElement("button");
  new_li.append(new_btn);
  new_btn.innerHTML = "Delete";

  resArr.push(new_li);
  new_btn.addEventListener("click", () => {
    new_li.remove();
  });
});
