import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import RequestForm from "./components/RequestForm";
// import "./App.css";

function App() {
	return (
		<Router>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/gallery">Gallery</Link>
					</li>
					<li>
						<Link to="/request">Book Now</Link>
					</li>
				</ul>
			</nav>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/gallery" component={Gallery} />
				<Route path="/request" component={RequestForm} />
			</Switch>
		</Router>
	);
}

export default App;
