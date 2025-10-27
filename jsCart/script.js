let itemTable = document.getElementById("itemTable");
let btnShowTable = document.getElementById("showTable");

btnShowTable.onclick = () => {
  itemTable.removeAttribute("hidden");
};

let item1 = {
  srno: 1,
  itemName: "Item 1",
  itemImage: "item1.png",
  stock: 15,
  quantity: 0,
  rate: 10,
  total: 0,
};
let item2 = {
  srno: 2,
  itemName: "Item 2",
  itemImage: "item2.png",
  stock: 10,
  quantity: 0,
  rate: 20,
  total: 0,
};
let item3 = {
  srno: 3,
  itemName: "Item 3",
  itemImage: "item3.png",
  stock: 5,
  quantity: 0,
  rate: 30,
  total: 0,
};

// localStorage.setItem("arrItems", JSON.stringify([item1, item2, item3]));
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
    <td style="background-color:${item.stock == 0 ? "red" : ""};">${
      item.stock
    }</td>
    <td>${item.rate}</td>
    <td>${item.total}</td>
    </tr>`;
  });

  tableBody.innerHTML = trow;
  // console.log(tableBody);
  localStorage.setItem("arrItems", JSON.stringify(arrItems));
}

function increment(index) {
  if (arrItems[index].stock > 0) {
    console.log(arrItems[index].stock);

    arrItems[index].stock--;
    arrItems[index].quantity++;
    arrItems[index].total = arrItems[index].rate * arrItems[index].quantity;
  }
  render();
}

function decrement(index) {
  if (arrItems[index].quantity > 0) {
    arrItems[index].quantity--;
    arrItems[index].stock++;
    arrItems[index].total = arrItems[index].rate * arrItems[index].quantity;
  }
  render();
}

let re = localStorage.getItem("arrItems");
arrItems = JSON.parse(re);

render();
