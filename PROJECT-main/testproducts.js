let productList = [
  {
    name: "Gà rán",
    price: "10.000 đồng",
  },
  {
    name: "Hamburger",
    price: "10.000 đồng",
  },
  {
    name: "Corndog",
    price: "10.000 đồng",
  },
  {
    name: "Taco",
    price: "10.000 đồng",
  },
];
let grid = document.getElementById("table");
let gridWrapper = document.getElementById("grid-wrapper");

gridWrapper.innerHTML = `    
<div id="container">

<div class="cover">
  <div class="product">a</div>
  <div class="product">a</div>
  <div class="product">a</div>
  <div class="product">a</div>
</div>
<div class="cover">
  <div class="product">a</div>
  <div class="product">a</div>
  <div class="product">a</div>
  <div class="product">a</div>
</div>
<div class="cover">
  <div class="product">a</div>
  <div class="product">a</div>
  <div class="product">a</div>
  <div class="product">a</div>
</div>

</div>`;

let listUserRender = phoneList
  .map((user, index) => {
    return `    
<div id="container">
    
    <div class="cover">
      <div class="product">${user.name}</div>
      <div class="product">${user.name}</div>
      <div class="product">${user.name}</div>
      <div class="product">${user.name}</div>
    </div>
    <div class="cover">
      <div class="product">${user.name}</div>
      <div class="product">${user.name}</div>
      <div class="product">${user.name}</div>
      <div class="product">${user.name}</div>
    </div>
    <div class="cover">
      <div class="product">${user.name}</div>
      <div class="product">${user.name}</div>
      <div class="product">${user.name}</div>
      <div class="product">${user.name}</div>
    </div>

</div>`;
})
  .join("\n");

grid.innerHTML = `
<div id="container">

<div class="cover">
  <div class="product">Tên sản phẩm:</div>
  <div class="product">Tên sản phẩm:</div>
  <div class="product">Tên sản phẩm:</div>
  <div class="product">Tên sản phẩm:</div>
</div>
<div class="cover">
  <div class="product">Tên sản phẩm:</div>
  <div class="product">Tên sản phẩm:</div>
  <div class="product">Tên sản phẩm:</div>
  <div class="product">Tên sản phẩm:</div>
</div>
<div class="cover">
  <div class="product">Tên sản phẩm:</div>
  <div class="product">Tên sản phẩm:</div>
  <div class="product">Tên sản phẩm:</div>
  <div class="product">Tên sản phẩm:</div>
</div>

</div>
${listUserRender}
`;
