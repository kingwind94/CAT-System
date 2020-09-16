import React, { Component } from "react";
import "./DragAndSwap.css";

export default class DragAndSwap extends Component {
	constructor(props) {
		super();
		this.state = {
			numOfOptions: 8,
			textOptions: [
				{
					textId: 1,
					text: "Walk the walk",
				},
				{
					textId: 2,
					text: "Talk the talk",
				},
				{
					textId: 3,
					text: "Jump the jump",
				},
				{
					textId: 4,
					text: "Hello World",
				},
				{
					textId: 5,
					text: "",
				},
				{
					textId: 6,
					text: "",
				},
				{
					textId: 7,
					text: "",
				},
				{
					textId: 8,
					text: "",
				},
			],
			draggedTask: {},
		};
	}

	onDrag = (event, todo) => {
		event.preventDefault();
		this.setState({
			draggedTask: todo,
		});
	};

	onDragOver = (event) => {
		event.preventDefault();
	};

	onDrop = (event) => {
		const { textOptions, draggedTask } = this.state;
		let sourceText = draggedTask.text;
		console.log(event.target.id - 1);
		let destText = textOptions[event.target.id - 1].text;
		const newTextOptions = this.state.textOptions.slice(); //copy the array
		newTextOptions[event.target.id - 1].text = sourceText; //execute the manipulations
		newTextOptions[draggedTask.textId - 1].text = destText; //execute the manipulations
		this.setState({ textOptions: newTextOptions }); //set the new state
	};
	render() {
		const { textOptions, textAnswer } = this.state;
		return (
			<div className="DragAndDropApp">
				<div className="texts">
					{textOptions.slice(0, this.state.numOfOptions / 2).map((option) => (
						<div
							className="item"
							key={option.textId}
							id={option.textId}
							draggable
							onDrag={(event) => this.onDrag(event, option)}
							onDrop={(event) => this.onDrop(event)}
							onDragOver={(event) => this.onDragOver(event)}
						>
							{option.text}
						</div>
					))}
				</div>

				<div className="answer">
					{textOptions.slice(this.state.numOfOptions / 2).map((option) => (
						<div
							className="item"
							key={option.textId}
							id={option.textId}
							draggable
							onDrag={(event) => this.onDrag(event, option)}
							onDrop={(event) => this.onDrop(event)}
							onDragOver={(event) => this.onDragOver(event)}
						>
							{option.text}
						</div>
					))}
				</div>
			</div>
		);
	}
}
