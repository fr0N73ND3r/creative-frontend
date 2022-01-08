import { Component } from "react"

export default class ImportantControl extends Component {
	render() {
		const { clickHandler, level } = this.props
		return (
			<span className="important-wrapper">
				<span className="important-btn" onClick={clickHandler}>
					<span className={`important-level ${level >= 1 ? "active" : ""}`}>!</span>
					<span className={`important-level ${level >= 2 ? "active" : ""}`}>!</span>
					<span className={`important-level ${level >= 3 ? "active" : ""}`}>!</span>
				</span>
			</span>
		)
	}
}