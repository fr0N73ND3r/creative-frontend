import { Component } from "react";
import TaskList from "./TaskList"
import TaskForm from "./TaskForm";
import Summary from "./Summary";
import ControlPanel from "./ControlPanel";
import Alert from "../Alert";
import { nanoid } from "nanoid"

function byCreatedAt(a, b) {
	return b.createdAt - a.createdAt;
}

const tasks = [
	{
		"id": nanoid(),
		"title": "First task",
		"done": true,
		"createdAt": Date.now(),
		"important": 0
	},
	{
		"id": nanoid(),
		"title": "Second task",
		"done": false,
		"createdAt": Date.now() + 1,
		"important": 2
	},
];

class TaskManager extends Component {
	constructor(props) {
		super(props)
		this.createTask = this.createTask.bind(this)
		this.removeTask = this.removeTask.bind(this)
		this.toggleTask = this.toggleTask.bind(this)
		this.toggleImportant = this.toggleImportant.bind(this)
		this.handleShowActive = this.handleShowActive.bind(this)
		this.handleShowCompleted = this.handleShowCompleted.bind(this)
		this.addError = this.addError.bind(this)
		this.clearError = this.clearError.bind(this)

		this.state = {
			"tasks": tasks,
			"showActive": true,
			"showCompleted": true,
			"error": null
		}
	}

	updateTask(id, callback) {
		this.setState(function (state) {
			const task = state.tasks.find(element => element.id === id)
			const tasks = state.tasks.filter(task => task.id !== id)

			const newTask = callback(task, state)

			return { "tasks": [newTask, ...tasks] }
		})
	}

	removeTask(id) {
		this.setState(function (state) {
			const tasks = state.tasks.filter(task => task.id !== id)

			return { "tasks": tasks }
		})
	}

	createTask(data) {
		data = {
			...data,
			"id": nanoid(),
			"createdAt": Date.now(),
			"important": 0
		}

		const existTask = this.state.tasks.findIndex(task => task.title === data.title)
		if (existTask !== -1) {
			this.addError(`Task "${data.title}" already exist`)
			return;
		}

		this.setState(function (state) {
			return { "tasks": [data, ...state.tasks] };
		})
	}

	toggleTask(id) {
		this.updateTask(id, task => {
			return {
				...task,
				"done": !task.done
			}
		})
	}
	toggleImportant(id) {
		this.updateTask(id, task => {
			return {
				...task,
				"important": (task.important + 1) % 4
			}
		})
	}

	handleShowActive() {
		this.setState(state => {
			return {
				"showActive": !state.showActive
			}
		})
	}
	handleShowCompleted() {
		this.setState(state => {
			return {
				"showCompleted": !state.showCompleted
			}
		})
	}

	addError(error) {
		this.setState(() => { return { "error": error } })
		setTimeout(this.clearError, 5000)
	}

	clearError() {
		this.setState(() => { return { "error": null } })
	}

	render() {
		let {tasks} = this.state
		let totalTasks = [];

		if (this.state.showActive) {
			totalTasks = [...totalTasks, ...tasks.filter(task => !task.done).sort(byCreatedAt)]
		}

		if (this.state.showCompleted) {
			totalTasks = [...totalTasks, ...tasks.filter(task => task.done).sort(byCreatedAt)]
		}

		let errorAlert = null
		if (this.state.error !== null) {
			errorAlert = <div><Alert type="danger">{this.state.error}</Alert><br /></div>
		}

		return (
			<div className="task-manager container">
				<div className="row">
					<div className="col-md-6">
						<TaskForm
							createTask={this.createTask}>
						</TaskForm>
						<br />
						<ControlPanel
							showActive={this.state.showActive}
							showCompleted={this.state.showCompleted}
							showActiveHandler={this.handleShowActive}
							showCompletedHandler={this.handleShowCompleted}
						></ControlPanel>
						<br />
						{errorAlert}
						<TaskList
							tasks={totalTasks}
							toggleTask={this.toggleTask}
							removeTask={this.removeTask}
							toggleImportant={this.toggleImportant}
						>
						</TaskList>
					</div>
					<div className="col-md-6">
						<Summary tasks={this.state.tasks}></Summary>
					</div>
				</div>

			</div>
		)
	}
}

export default TaskManager