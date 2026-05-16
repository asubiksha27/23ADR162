const express = require("express");
const app = express();

app.use(express.json());

let products = [];

// Add product
app.post("/products", (req, res) => {
    let product = req.body;
    products.push(product);

    res.send("Product added");
});

// Get all products
app.get("/products", (req, res) => {
    res.json(products);
});

// Update product
app.put("/products/:id", (req, res) => {
    let id = req.params.id;

    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            products[i] = req.body;
        }
    }

    res.send("Product updated");
});

// Delete product
app.delete("/products/:id", (req, res) => {
    let id = req.params.id;

    products = products.filter(product => product.id != id);

    res.send("Product deleted");
});

app.listen(3000, () => {
    console.log("Server started");
});