// const storeItems = document.getElementById("#store");
const storeItems = document.querySelector(".store--item-list");

function render() {
  //   console.log("store Items", storeItems);
  //   for (let i = 0; index < state.length; index++) {
  //     const grocerItems = state[i];
  //   }
  const allItemsListed = document.createElement("ul");
  allItemsListed.setAttribute("class", "item-list store--item-list");
  storeItems.append(allItemsListed);

  const beetroot = document.createElement("li");
  allItemsListed.append(beetroot);

  const beetrootPic = document.createElement("img");
  beetroot.setAttribute("class", "store--item-icon");
  beetrootPic.src = `assets/icons/${state.items[0].id}.svg`;
  beetroot.append(beetrootPic);

  //   console.log("I am loaded");
}

function run() {
  render();
}

run();
