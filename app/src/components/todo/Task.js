import PropTypes from "prop-types"
import ImportantControl from "./ImportantControl"
import TaskModel from "../../Models/TaskModel"

function Task({
  task,
  handleToggleImportant,
  handleToggleTask,
  handleRemoveTask,
}) {
  const {
    id, done, title, important,
  } = task

  return (
    <div className="row">
      <div className="col-sm-auto">
        <code
          role="button"
          className="task_check"
          onClick={() => handleToggleTask(id)}
          onKeyPress={() => handleToggleTask(id)}
          tabIndex={0}
        >
          [
          {done ? "X" : " "}
          ]
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
          handleClick={() => handleToggleImportant(id)}
        />
      </div>
      <div className="col-sm-auto">
        <div
          role="button"
          className="task_remove"
          onClick={() => handleRemoveTask(id)}
          onKeyPress={() => handleRemoveTask(id)}
          tabIndex={0}
        >
          [del]
        </div>
      </div>
    </div>
  )
}

Task.propTypes = {
  task: PropTypes.instanceOf(TaskModel).isRequired,
  handleToggleImportant: PropTypes.func.isRequired,
  handleToggleTask: PropTypes.func.isRequired,
  handleRemoveTask: PropTypes.func.isRequired,
}

export default Task
