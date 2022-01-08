import { Children, Component } from "react"

export default class ToggleBadge extends Component {
	render() {
		const { handler, status } = this.props
		return (
			<span onClick={handler} className={`badge ${status ? " badge-success" : " badge-primary"}`}>
				{this.props.children}
			</span>
		)
	}
}