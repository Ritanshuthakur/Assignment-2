function addItem(inventory, item) {
    inventory.push(item);
    console.log("Adding item:");
    printInventory(inventory);
}

function updateItem(inventory, id, newDetails) {
    const index = inventory.findIndex(item => item.id === id);
    if (index !== -1) {
        inventory[index] = { ...inventory[index], ...newDetails };
        console.log("Updating item:");
        printInventory(inventory);
    } else {
        console.log(`Item with id ${id} not found.`);
    }
}

function deleteItem(inventory, id) {
    const index = inventory.findIndex(item => item.id === id);
    if (index !== -1) {
        inventory.splice(index, 1);
        console.log("Deleting item:");
        printInventory(inventory);
    } else {
        console.log(`Item with id ${id} not found.`);
    }
}

function getItem(inventory, id) {
    return inventory.find(item => item.id === id);
}

function printInventory(inventory) {
    console.log(JSON.stringify(inventory, null, 2));
}

let inventory = [
    { id: 1, name: 'Apple', quantity: 10, price: 0.5 },
    { id: 2, name: 'Banana', quantity: 20, price: 0.2 }
];

console.log("Initial Inventory:");
printInventory(inventory);

addItem(inventory, { id: 3, name: 'Orange', quantity: 15, price: 0.7 });
updateItem(inventory, 2, { quantity: 30 });
deleteItem(inventory, 2);

const item = getItem(inventory, 1);
console.log("Retrieved Item:", item);
