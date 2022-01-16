import PropTypes from "prop-types"
import Task from "./Task"
import TaskModel from "../../Models/TaskModel"

function TaskList({
  tasks,
  handleToggleImportant,
  handleToggleTask,
  handleRemoveTask,
}) {
  if (!tasks) {
    return null
  }
  return (
    <div>
      {
        tasks.map(
          (task) => (
            <Task
              key={task.id.toString()}
              task={task}
              handleRemoveTask={handleRemoveTask}
              handleToggleTask={handleToggleTask}
              handleToggleImportant={handleToggleImportant}
            />
          ),
        )
      }
    </div>
  )
}

TaskList.defaultProps = {
  tasks: [],
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.instanceOf(TaskModel)),
  handleToggleImportant: PropTypes.func.isRequired,
  handleToggleTask: PropTypes.func.isRequired,
  handleRemoveTask: PropTypes.func.isRequired,
}

export default TaskList
