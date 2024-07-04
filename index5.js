// Create an Inventory system in JavaScript to manage products using prototypes. Implement a Product constructor function that defines the properties of a product such as name, category, price, and stock. Develop an Inventory constructor function that initializes an empty inventory array. Extend the Inventory prototype with a method addProduct that adds a valid Product object to the inventory and logs a confirmation message. Additionally, implement a method deleteProduct that removes a product from the inventory by name and logs whether the deletion was successful.
function Product(name, category, price, stock) {
    this.name = name;
    this.category = category;
    this.price = price;
    this.stock = stock;
}

function Inventory() {
    this.items = [];
}

Inventory.prototype.addItem = function(product) {
    const existingProduct = this.items.find(item => item.name === product.name);
    if (!existingProduct) {
        this.items.push(product);
        console.log('Item added successfully');
    } else {
        console.log('Item already present');
    }
};

Inventory.prototype.deleteItem = function(productName) {
    const index = this.items.findIndex(item => item.name === productName);
    if (index !== -1) {
        this.items.splice(index, 1);
        console.log('Item removed successfully');
    } else {
        console.log('Item not found');
    }
};

// Example usage
let myInventory = new Inventory();
let ball = new Product('ball', 'sports', 10, 100);

myInventory.addItem(ball);
myInventory.deleteItem('ball');
