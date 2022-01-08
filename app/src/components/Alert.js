import { Component } from "react";

export default class Alert extends Component {

	render()
	{
		return (
			<div className={`alert alert-${this.props.type || "info"}`}>
				{this.props.children}
			</div>
		)
	}
}