import { Component } from "react";
import ToggleBadge from "./TaggleBadge";
import ImportantControl from "./ImportantControl";

export default class ControlPanel extends Component {
	render() {
		return (
			<div className="control-panel row">
				<div className="col">
					Show:
					<ToggleBadge
						status={this.props.showActive}
						handler={this.props.showActiveHandler}
					>
						Active
					</ToggleBadge>
					<ToggleBadge
						status={this.props.showCompleted}
						handler={this.props.showCompletedHandler}
					>
						Completed
					</ToggleBadge>
				</div>
			</div>
		)
	}
}