// Sample data for products
const products = [
    { name: "Tomatoes", price: 1.5, stock: 100 },
    { name: "Potatoes", price: 0.8, stock: 200 },
    { name: "Carrots", price: 1.2, stock: 150 }
  ];
  
  const productListContainer = document.querySelector('.product-list');
  const productNameSelect = document.getElementById('productName');
  const orderForm = document.getElementById('orderForm');
  const inventoryList = document.getElementById('inventoryList');
  
  // Display products on page
  function displayProducts() {
    productListContainer.innerHTML = "";
    products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
      productDiv.innerHTML = `
        <h3>${product.name}</h3>
        <p>Price: $${product.price.toFixed(2)}</p>
        <p>In Stock: ${product.stock}</p>
      `;
      productListContainer.appendChild(productDiv);
  
      const option = document.createElement('option');
      option.value = product.name;
      option.textContent = product.name;
      productNameSelect.appendChild(option);
    });
  }
  
  // Update inventory after an order
  function updateInventory(productName, quantity) {
    const product = products.find(p => p.name === productName);
    if (product && product.stock >= quantity) {
      product.stock -= quantity;
      alert(`${quantity} ${productName}(s) ordered successfully!`);
    } else {
      alert("Insufficient stock!");
    }
    displayProducts();
    displayInventory();
  }
  
  // Handle form submission
  orderForm.addEventListener('submit', event => {
    event.preventDefault();
    const productName = productNameSelect.value;
    const quantity = parseInt(document.getElementById('quantity').value);
    updateInventory(productName, quantity);
    orderForm.reset();
  });
  
  // Display current inventory status
  function displayInventory() {
    inventoryList.innerHTML = "";
    products.forEach(product => {
      const inventoryItem = document.createElement('div');
      inventoryItem.classList.add('inventory-item');
      inventoryItem.innerHTML = `
        <h4>${product.name}</h4>
        <p>Stock Remaining: ${product.stock}</p>
      `;
      inventoryList.appendChild(inventoryItem);
    });
  }
  
  // Initial display
  displayProducts();
  displayInventory();
  