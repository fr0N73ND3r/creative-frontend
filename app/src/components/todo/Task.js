
import { Component } from "react";
import ImportantControl from "./ImportantControl";
class Task extends Component {

	render() {
		const { id, done, title, important } = this.props.task
		return (
			<div className="row">
				<div className="col-sm-auto">
					<code className="task_check" onClick={() => this.props.toggleTask(id)}>
						[{done ? "X" : " "}]
					</code>
				</div>
				<div className="col">
					<span className={done ? "text-muted" : ""}>
						{title}
					</span>
				</div>
				<div className="col-sm-auto">
					<ImportantControl
						level={important}
						clickHandler={() => this.props.toggleImportant(id)}
					>
					</ImportantControl>
				</div>
				<div className="col-sm-auto">
					<div className="task_remove" onClick={() => this.props.removeTask(id)}> [del] </div>
				</div>
			</div>
		)
	}
}

export default Task