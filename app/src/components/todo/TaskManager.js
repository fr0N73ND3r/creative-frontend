import { useState } from "react"
import useTaskReducer, {
  ACTION_CREATE, ACTION_DELETE, ACTION_TOGGLE_STATE, ACTION_TOGGLE_IMPORTANT,
} from "../../Reducers/TaskReducer"
import { byCreatedAtDesc } from "../../Utils/SortConditions"
import { activeTaskFilter, completedTaskFilter } from "../../Utils/Comparators"
import TaskList from "./TaskList"
import TaskForm from "./TaskForm"
import Summary from "./Summary"
import ControlPanel from "./ControlPanel"
import TaskData from "../../Mock/Tasks"

/**
 * Компонент менеджера задач
 */
export default function TaskManager() {
  const [tasks, dispatch] = useTaskReducer(TaskData)
  const [showActive, setShowActive] = useState(true)
  const [showCompleted, setShowCompleted] = useState(true)

  const totalTasks = [
    ...(showActive ? tasks.filter(activeTaskFilter).sort(byCreatedAtDesc) : []),
    ...(showCompleted ? tasks.filter(completedTaskFilter).sort(byCreatedAtDesc) : []),
  ]

  return (
    <div className="task-manager container">
      <div className="row">
        <div className="col-md-6">
          <TaskForm createTask={(data) => dispatch({ type: ACTION_CREATE, payload: data })} />
          <br />
          <ControlPanel
            showActive={showActive}
            showCompleted={showCompleted}
            showActiveHandler={() => setShowActive(!showActive)}
            showCompletedHandler={() => setShowCompleted(!showCompleted)}
          />
          <TaskList
            tasks={totalTasks}
            handleRemoveTask={(id) => dispatch({ type: ACTION_DELETE, payload: id })}
            handleToggleTask={(id) => dispatch({ type: ACTION_TOGGLE_STATE, payload: id })}
            handleToggleImportant={(id) => dispatch({ type: ACTION_TOGGLE_IMPORTANT, payload: id })}
          />
        </div>
        <div className="col-md-6">
          <Summary tasks={tasks} />
        </div>
      </div>

    </div>
  )
}
