import PropTypes from "prop-types"
import Progress from "../Progress"
import TaskModel, { IMPORTANT_LOW, IMPORTANT_MEDIUM, IMPORTANT_HIGHT } from "../../Models/TaskModel"

function Summary({
  tasks,
}) {
  const totalCount = tasks.length
  const active = tasks.filter((task) => !task.done)
  const complete = tasks.filter((task) => task.done)
  const impHight = tasks.filter((task) => task.important === IMPORTANT_HIGHT)
  const impMedium = tasks.filter((task) => task.important === IMPORTANT_MEDIUM)
  const impLow = tasks.filter((task) => task.important === IMPORTANT_LOW)

  return (
    <div>
      <h1>Summary</h1>
      <br />
      <div>
        Total tasks:
        {" "}
        {totalCount}
      </div>
      <br />
      <div>
        Active tasks:
        {" "}
        {active.length}
        <Progress current={active.length} total={totalCount} />
      </div>
      <br />
      <div>
        Completed tasks:
        {" "}
        {complete.length}
        <Progress current={complete.length} total={totalCount} />
      </div>
      <br />
      <h4>Important</h4>
      <br />
      <div>
        Hight important tasks:
        {" "}
        {impHight.length}
        <Progress current={impHight.length} total={totalCount} />
      </div>
      <br />
      <div>
        Medium important tasks:
        {" "}
        {impMedium.length}
        <Progress current={impMedium.length} total={totalCount} />
      </div>
      <br />
      <div>
        Low important tasks:
        {" "}
        {impLow.length}
        <Progress current={impLow.length} total={totalCount} />
      </div>
    </div>
  )
}

Summary.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.instanceOf(TaskModel)).isRequired,
}

export default Summary
