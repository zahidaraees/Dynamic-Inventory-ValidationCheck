interface Product {
    name: string;
    quantity: number;
    price: number;
}

// Initial product list
const products: Product[] = [
    { name: "HP-Laptop-EliteBook", quantity: 10, price: 150000000.0 },
    { name: "Dell OptiPlex 3090 i3-10100 4GB 1TB HDD Tower PC", quantity: 1, price: 94999.0 },
    { name: "Del Desktop Core-I5", quantity: 20, price: 1100000.0 },
    { name: "MacBook Pro", quantity: 5, price: 130000.0 },
    { name: "EASE Mini PC EMi513G i5-1340P", quantity: 1, price: 300000.0 },
];

// Populate the initial product table
const tableBody = document.getElementById('product-table-body') as HTMLTableSectionElement | null;

if (tableBody) {
    products.forEach(product => addProductToTable(product, tableBody));
} else {
    console.error('Table body element not found');
}

// Function to add a product row to the table
function addProductToTable(product: Product, tableBody: HTMLElement) {
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = product.name;
    row.appendChild(nameCell);

    const quantityCell = document.createElement('td');
    quantityCell.textContent = product.quantity.toString();
    row.appendChild(quantityCell);

    const priceCell = document.createElement('td');
    priceCell.textContent = product.price.toFixed(2); // Format price as a string
    row.appendChild(priceCell);

    tableBody.appendChild(row);
}

// Handle adding new products
const addProductButton = document.getElementById('add-product-button') as HTMLButtonElement | null;
if (addProductButton && tableBody) {
    addProductButton.addEventListener('click', () => {
        const nameInput = document.getElementById('product-name') as HTMLInputElement | null;
        const quantityInput = document.getElementById('product-quantity') as HTMLInputElement | null;
        const priceInput = document.getElementById('product-price') as HTMLInputElement | null;

        if (!nameInput || !quantityInput || !priceInput) {
            console.error('One or more input elements are missing');
            return;
        }

        const name = nameInput.value.trim();
        const quantity = parseInt(quantityInput.value, 10);
        const price = parseFloat(priceInput.value);

        // Validation checks
        if (!name) {
            alert('Product name cannot be empty.');
            return;
        }

        if (isNaN(quantity) || quantity <= 0) {
            alert('Quantity must be a positive number.');
            return;
        }

        if (isNaN(price) || price <= 0) {
            alert('Price must be a valid positive number.');
            return;
        }

        // Add the new product if all validations pass
        const newProduct: Product = { name, quantity, price };
        products.push(newProduct);
        addProductToTable(newProduct, tableBody);

        // Clear input fields
        nameInput.value = '';
        quantityInput.value = '';
        priceInput.value = '';
    });
} else {
    console.error('Add product button or table body not found');
}
