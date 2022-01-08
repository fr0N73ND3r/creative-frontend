
import {Component} from "react";
import Progress from "../Progress";

class Summary extends Component {

	render()
	{
		const totalCount = this.props.tasks.length
		const active = this.props.tasks.filter(task => !task.done)
		const complete = this.props.tasks.filter(task => task.done)
		const impHight = this.props.tasks.filter(task => task.important === 3)
		const impMedium = this.props.tasks.filter(task => task.important === 2)
		const impLow = this.props.tasks.filter(task => task.important === 1)

		return (
			<div>
				<h1>Summary</h1>
				<br/>
				<div>
						Total tasks: {totalCount}
				</div>
				<br/>
				<div>
						Active tasks: {active.length}
						<Progress current={active.length} total={totalCount}></Progress>
				</div>
				<br/>
				<div>
						Completed tasks: {complete.length}
						<Progress current={complete.length} total={totalCount}></Progress>
				</div>
				<br/>
				<h4>Important</h4>
				<br/>
				<div>
						Hight important tasks: {impHight.length}
						<Progress current={impHight.length} total={totalCount}></Progress>
				</div>
				<br/>
				<div>
						Medium important tasks: {impMedium.length}
						<Progress current={impMedium.length} total={totalCount}></Progress>
				</div>
				<br/>
				<div>
						Low important tasks: {impLow.length}
						<Progress current={impLow.length} total={totalCount}></Progress>
				</div>
			</div>
		)
	}
}

export default Summary