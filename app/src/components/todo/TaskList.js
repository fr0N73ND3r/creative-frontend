
import { Component } from "react"
import Task from "./Task"

class TaskList extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				{
					this.props.tasks.map(
						task => <Task
							key={task.id.toString()}
							task={task}
							toggleTask={this.props.toggleTask}
							removeTask={this.props.removeTask}
							toggleImportant={this.props.toggleImportant}
						></Task>
					)
				}
			</div>
		);
	}
}

export default TaskList