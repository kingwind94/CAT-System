import React, { Component } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";


// fake data generator
const getItems = (count, offset = 0) =>
	Array.from({ length: count }, (v, k) => k).map((k) => ({
		id: `item-${k + offset}`,
		content: `item ${k + offset}`,
	}));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
	const result = Array.from(list);
	const [removed] = result.splice(startIndex, 1);
	result.splice(endIndex, 0, removed);

	return result;
};

/**
 * Swap two items
 */
const swap = (source, destination, droppableSource, droppableDestination) => {
	const sourceClone = Array.from(source);
	const destClone = Array.from(destination);
	const [removed] = sourceClone.splice(droppableSource.index, 1);

	destClone.splice(droppableDestination.index, 0, removed);

	const result = {};
	result[droppableSource.droppableId] = sourceClone;
	result[droppableDestination.droppableId] = destClone;

	return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
	// some basic styles to make the items look a bit nicer
	userSelect: "none",
	padding: grid * 5,
	margin: `0 0 ${grid}px 0`,

	// change background colour if dragging
	background: isDragging ? "lightgreen" : "white",

	// styles we need to apply on draggables
	...draggableStyle,
});

const getListStyle = (isDraggingOver) => ({
	background: isDraggingOver ? "lightblue" : "lightgrey",
	padding: grid,
	width: 650,
});

class DragAndDrop extends Component {
	state = {
		items: getItems(4),
		selected: getItems(4, 5),
	};

	/**
	 * A semi-generic way to handle multiple lists. Matches
	 * the IDs of the droppable container to the names of the
	 * source arrays stored in the state.
	 */
	id2List = {
		droppable: "items",
		droppable2: "selected",
	};

	getList = (id) => this.state[this.id2List[id]];

	onDragEnd = (result) => {
		const { source, destination } = result;

		// dropped outside the list
		if (!destination) {
			return;
		}

		// reorder in the same list
		if (source.droppableId === destination.droppableId) {
			const items = reorder(this.getList(source.droppableId), source.index, destination.index);

			let state = { items };

			if (source.droppableId === "droppable2") {
				state = { selected: items };
			}

			this.setState(state);
		} else {
			// move one item from one list to another
			console.log(source);
			console.log(destination);
			const result = swap(this.getList(source.droppableId), this.getList(destination.droppableId), source, destination);

			this.setState({
				items: result.droppable,
				selected: result.droppable2,
			});
		}
	};

	// Normally you would want to split things out into separate components.
	// But in this example everything is just done in one place for simplicity
	render() {
		return (
			<div style={{ display: "flex", position: "relative", left: "10%", top: "30px" }}>
				<DragDropContext onDragEnd={this.onDragEnd}>
					<Droppable droppableId="droppable">
						{(provided, snapshot) => (
							<div ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}>
								{this.state.items.map((item, index) => (
									<Draggable key={item.id} draggableId={item.id} index={index}>
										{(provided, snapshot) => (
											<div
												ref={provided.innerRef}
												{...provided.draggableProps}
												{...provided.dragHandleProps}
												style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
											>
												{item.content}
											</div>
										)}
									</Draggable>
								))}
								{provided.placeholder}
							</div>
						)}
					</Droppable>
					<Droppable droppableId="droppable2">
						{(provided, snapshot) => (
							<div ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}>
								{this.state.selected.map((item, index) => (
									<Draggable key={item.id} draggableId={item.id} index={index}>
										{(provided, snapshot) => (
											<div
												ref={provided.innerRef}
												{...provided.draggableProps}
												{...provided.dragHandleProps}
												style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
											>
												{item.content}
											</div>
										)}
									</Draggable>
								))}
								{provided.placeholder}
							</div>
						)}
					</Droppable>
				</DragDropContext>
			</div>
		);
	}
}

export default DragAndDrop;