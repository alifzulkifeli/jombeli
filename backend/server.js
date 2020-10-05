const express = require("express");
const morgan = require("morgan");
const products = require("./data/products");

const app = express();
morgan("tiny");

app.get("/", (req, res) => {
	res.send("API is running..");
});

app.get("/api/products", (req, res) => {
	res.json(products);
});

app.get("/api/products/:id", (req, res) => {
	const product = products.find((p) => p._id === req.params.id);

	res.json(product);
});

app.listen(8008, console.log("server ron on 8008"));
