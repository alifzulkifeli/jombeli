import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();
connectDB();
const app = express();
morgan("tiny");

app.get("/", (req, res) => {
	res.send("API is running..");
});

app.use("/api/products", productRoutes);

app.use(notFound);

app.use(errorHandler);
const PORT = process.env.PORT || 8008;

app.listen(
	PORT,
	console.log(
		`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
			.bold
	)
);
