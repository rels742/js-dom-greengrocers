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

    const fruitAndVegImg = document.createElement("img");
    fruitAndVegList.setAttribute("class", "store--item-icon");
    fruitAndVegImg.src = `assets/icons/${grocerItems.id}.svg`;
    fruitAndVegList.append(fruitAndVegImg);
  }
}

function run() {
  render();
}

run();
