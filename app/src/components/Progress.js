
import { Component } from "react";

export default class Progress extends Component {

	render() {
		const percent = !this.props.current || !this.props.total
			? 0
			: this.props.current*100/this.props.total

		return (
			<div className="progress">
				<div className="progress-bar" role="progressbar" style={{width: percent + '%'}}></div>
			</div>
		)
	}
}
