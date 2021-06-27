const fruitList = document.querySelector("ol.fruit-list");
// Add buttons to li items

const createLi = (fruitName) => {
  let fullSpan = document.createElement("span");
  fullSpan.classList.add("li-content-wrap");
  let span = document.createElement("span");
  span.classList.add("fruit-span");
  let newLi = document.createElement("li");
  let upButton = document.createElement("button");
  upButton.innerText = "Up";
  upButton.classList.add("up");
  let downButton = document.createElement("button");
  downButton.classList.add("down");
  downButton.innerText = "Down";
  let removeButton = document.createElement("button");
  removeButton.classList.add("remove");
  removeButton.innerText = "Remove";

  span.innerText = fruitName;

  fullSpan.appendChild(span);
  fullSpan.appendChild(upButton);
  fullSpan.appendChild(downButton);
  fullSpan.appendChild(removeButton);

  newLi.appendChild(fullSpan);
  return newLi;
};

const fruits = fruitList.children;
function initLi() {
  let li_list = [];
  // create new LIs
  for (let i = 0; i < fruits.length; i++) {
    console.log("looped-1");
    const li = fruits[i];
    let ul = li.parentNode;
    let fruitName = li.innerText;
    let newLi = createLi(fruitName);
    li_list.push(newLi);
  }
  // remove Lis
  let myOl = document.querySelector("ol.fruit-list");
  console.log(myOl);
  myOl.innerHTML = "";
  li_list.forEach((fruitLi) => {
    myOl.appendChild(fruitLi);
  });
}
initLi();
const submitBtn = document.querySelector("#add-fruit");
submitBtn.addEventListener("click", (e) => {
  let fruit = submitBtn.previousElementSibling.value;
  let newLi = createLi(fruit);
  fruitList.appendChild(newLi);
});

fruitList.addEventListener("click", (e) => {
  //   console.log(e);
  let tagName = e.target.tagName;
  if (tagName == "BUTTON") {
    let btnClasses = e.target.classList;
    if (btnClasses.contains("remove")) {
      console.log("contains remove");
      let li = e.target.parentNode.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
    } else if (btnClasses.contains("down")) {
      let li = e.target.parentNode.parentNode;
      let ul = li.parentNode;
      let nextLi = li.nextElementSibling;
      console.log(nextLi);
      if (nextLi) {
        ul.insertBefore(nextLi, li);
      }
    } else if (btnClasses.contains("up")) {
      let li = e.target.parentNode.parentNode;
      let ul = li.parentNode;
      let prevLi = li.previousElementSibling;
      console.log(prevLi);
      if (prevLi) {
        ul.insertBefore(li, prevLi);
      }
    }
  }
});
