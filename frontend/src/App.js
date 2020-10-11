import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./Screen/HomeScreen";
import ProductScreen from "./Screen/ProductScreen";
import CartScreen from "./Screen/CartScreen";
import LoginScreen from './Screen/LoginScreen'
import RegisterScreen from './Screen/RegisterScreen'
import ProfileScreen from './Screen/ProfileScreen'
import ShippingScreen from './Screen/ShippingScreen'
import PaymentScreen from './Screen/PaymentScreen'
import PlaceOrderScreen from "./Screen/PlaceOrderScreen";
import OrderScreen from "./Screen/OrderScreen";

function App() {
	return (
		<Router>
			<Header />
			<main className="py-3">
				<Container>
				<Route path='/login' component={LoginScreen} />
				<Route path='/shipping' component={ShippingScreen} />
					<Route path="/" component={HomeScreen} exact />
					<Route path="/product/:id" component={ProductScreen} />
					<Route path="/cart/:id?" component={CartScreen} />
					<Route path='/register' component={RegisterScreen} />
					<Route path='/profile' component={ProfileScreen} />
					<Route path='/payment' component={PaymentScreen} />
					<Route path='/placeorder' component={PlaceOrderScreen} />
					<Route path='/order/:id' component={OrderScreen} />
				</Container>
			</main>
			<Footer />
		</Router>
	);
}

export default App;
