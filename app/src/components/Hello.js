import { Component } from "react";

export default class Hello extends Component {
	render() {
		return (
			<div className="row">
				<div className="col">
					<div className="jumbotron">
						<h1 className="display-4">Hello, world!</h1>
						<div className="lead">
							This is a simple to-do list manager made with <a href="">ReactJs</a>. You can add your suggestions for
							improvement or bug reports to the developer's repository
						</div>
					</div>
				</div>
			</div>
		)
	}
}