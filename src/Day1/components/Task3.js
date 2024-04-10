import React, { Component } from "react";

class Task3 extends Component {
  
	constructor(props) {
		super(props);

		// Set initial state
		this.state = {
			name: "Nil",
			questions: "0",
			students: "0",
		};

		// Binding this keyword
		this.updateState = this.updateState.bind(this);
	}

	updateState() {
		// Changing state
		this.setState({
			name: "Programming Quiz",
			questions: "10",
			students: "30",
		});
	}

	render() {
		return (
			<div>
				<h2>Test Portal</h2>
				<p>{this.state.name}</p>

				<p>{this.state.questions}</p>

				<p>{this.state.students}</p>

				{/* Set click handler */}
				<button onClick={this.updateState}>
					Click me!
				</button>
			</div>
		);
	}
}

export default Task3;



