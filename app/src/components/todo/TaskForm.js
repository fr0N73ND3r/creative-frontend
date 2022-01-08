
import { Component } from "react";

class TaskForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			"taskTitle": ""
		}

		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(e) {
		e.preventDefault()
		this.setState({ "taskTitle": e.target.value })
	}

	handleSubmit(e) {
		e.preventDefault()
		const title = this.state.taskTitle

		if (title !== '') {
			this.props.createTask({
				"title": this.state.taskTitle
			})

			this.setState({ "taskTitle": "", "done": false })
		}
	}

	render() {
		return (
			<form className="row" onSubmit={this.handleSubmit}>
				<div className="form-group col-sm">
					<label htmlFor="task-title-input">Task title</label>
					<input id="task-title-input" className="form-control" onChange={this.handleChange} value={this.state.taskTitle} />
				</div>
				<div className="col-sm-auto">
					<label>&nbsp;</label><br />
					<input type="submit" value="Add task" className="btn btn-primary" />
				</div>
			</form>
		)
	}
}

export default TaskForm