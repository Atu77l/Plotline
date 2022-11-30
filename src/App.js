import React, { Component } from "react";
import { TextEditor } from "./components";
import Navbar from "./components/Navbar";
import "./App.css";

class App extends Component {
	render() {
		return (
	         <div>
			    <Navbar/>
				<h3 className="name">JOHN DOE INTERVIEW</h3>
				<TextEditor />
				
			</div>
		);
	}
}

export default App;
