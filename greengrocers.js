// const storeItems = document.getElementById("#store");
const storeItems = document.querySelector(".store--item-list");
const cart = document.querySelector(".cart--item-list-container");

function renderShopItems() {
  for (let i = 0; i < state.items.length; i++) {
    const grocerItem = state.items[i];

    const allItemsListed = document.createElement("ul");
    allItemsListed.setAttribute("class", "item-list store--item-list");
    storeItems.append(allItemsListed);

    const fruitAndVegList = document.createElement("li");
    allItemsListed.append(fruitAndVegList);

    const imgDiv = document.createElement("div");
    imgDiv.setAttribute("class", "store--item-icon");
    fruitAndVegList.append(imgDiv);
    const fruitAndVegImg = document.createElement("img");
    fruitAndVegImg.src = `assets/icons/${grocerItem.id}.svg`;
    imgDiv.append(fruitAndVegImg);

    const addToCartBttn = document.createElement("button");
    fruitAndVegList.append(addToCartBttn);
    addToCartBttn.innerText = "add to cart".toUpperCase();

    addToCartBttn.addEventListener("click", function () {
      state.cart.push(grocerItem);
      renderCartItems();
      //   console.log("adding to cart");
    });
  }
}

function renderCartItems() {
  const cartContainerList = document.querySelector(".cart--item-list");
  console.log(cartContainerList);
  cartContainerList.innerHTML = "";
  for (let i = 0; i < state.cart.length; i++) {
    const cartItems = state.cart[i];

    // Cart Items Container Section
    // const cartContainerList = document.createElement("ul");
    // cartContainerList.setAttribute("class", "item-list cart--item-list");
    // cart.append(cartContainerList);

    const cartItemList = document.createElement("li");
    cartContainerList.append(cartItemList);

    const cartItemImg = document.createElement("img");
    cartItemImg.setAttribute("class", "cart--item-icon");
    cartItemImg.src = `assets/icons/${cartItems.id}.svg`;
    cartItemList.append(cartItemImg);

    const cartItemName = document.createElement("p");
    cartItemList.append(cartItemName);
    cartItemName.innerText = cartItems.name;

    const cartDecrementBttn = document.createElement("button");
    cartDecrementBttn.setAttribute("class", "quantity-btn remove-btn center");
    cartDecrementBttn.innerText = "-";
    cartItemList.append(cartDecrementBttn);

    const cartQuantity = document.createElement("span");
    cartQuantity.setAttribute("class", "quantity-text center");
    cartQuantity.innerText = "1";
    cartItemList.append(cartQuantity);

    const cartIncrementBttn = document.createElement("button");
    cartIncrementBttn.setAttribute("class", "quantity-btn add-btn center");
    cartIncrementBttn.innerText = "+";
    cartItemList.append(cartIncrementBttn);
  }
}

function run() {
  renderShopItems();
}

run();
