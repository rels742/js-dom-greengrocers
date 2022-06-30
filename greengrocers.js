// const storeItems = document.getElementById("#store");
const storeItems = document.querySelector(".store--item-list");

function render() {
  for (let i = 0; i < state.items.length; i++) {
    const grocerItems = state.items[i];

    const allItemsListed = document.createElement("ul");
    allItemsListed.setAttribute("class", "item-list store--item-list");
    storeItems.append(allItemsListed);

    const fruitAndVegList = document.createElement("li");
    allItemsListed.append(fruitAndVegList);

    const imgDiv = document.createElement("div");
    imgDiv.setAttribute("class", "store--item-icon");
    fruitAndVegList.append(imgDiv);
    const fruitAndVegImg = document.createElement("img");
    fruitAndVegImg.src = `assets/icons/${grocerItems.id}.svg`;
    imgDiv.append(fruitAndVegImg);

    const addToCartBttn = document.createElement("button");
    fruitAndVegList.append(addToCartBttn);
    addToCartBttn.innerText = "add to cart".toUpperCase();
  }
}

function run() {
  render();
}

run();
