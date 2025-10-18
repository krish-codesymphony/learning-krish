let itemTable = document.getElementById("itemTable");
let btnShowTable = document.getElementById("showTable");

btnShowTable.onclick = () => {
  itemTable.removeAttribute("hidden");
};

let item1 = {
  srno: 1,
  itemName: "Item 1",
  itemImage: "item1.png",
  quantity: 1,
  rate: 10,
  total: 10,
};
let item2 = {
  srno: 2,
  itemName: "Item 2",
  itemImage: "item2.png",
  quantity: 1,
  rate: 20,
  total: 20,
};
let item3 = {
  srno: 3,
  itemName: "Item 3",
  itemImage: "item3.png",
  quantity: 1,
  rate: 30,
  total: 30,
};

let arrItems = [item1, item2, item3];

function render() {
  const tableBody = document.getElementById("items");
  let trow = "";

  arrItems.forEach((item, index) => {
    trow += `
    <tr>
    <td>${item.srno}</td>
    <td>${item.itemName}</td>
    <td><img src="${item.itemImage}" alt="${
      item.itemImage
    }" height="50px" width="50px"></td>
    <td>
    <button id="addItem" class="addBtn btn" onClick="increment(${index}
    )">+</button>
    <span class="qty">${item.quantity}</span>
    <button id="removeItem" class="removeBtn btn" onClick="decrement(${index}
    )">-</button>
    </td>
    <td>${item.rate}</td>
    <td>${item.rate * item.quantity}</td>
    </tr>`;
  });

  tableBody.innerHTML = trow;
  // console.log(tableBody);
}

render();

function increment(index) {
  ++arrItems[index].quantity;
  render();
}

function decrement(index) {
  if (arrItems[index].quantity > 0) {
    --arrItems[index].quantity;
    render();
  }
}

// let addItem = tableBody.querySelectorAll(".addBtn");
// let removeItem = tableBody.querySelectorAll(".removeBtn");

// addItem.forEach((addBtn) => {
//   addBtn.addEventListener("click", (event) => {
//     let qty = event.target.nextElementSibling;
//     qty.textContent = Number(qty.textContent) + 1;
//   });
// });

// removeItem.forEach((rmBtn) => {
//   rmBtn.addEventListener("click", (event) => {
//     let qty = event.target.previousElementSibling;
//     qty.textContent = Number(qty.textContent) - 1;
//   });
// });
