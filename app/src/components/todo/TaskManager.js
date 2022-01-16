import { Component } from "react"

import { byCreatedAtDesc } from "../../Utils/SortConditions"
import { activeTaskFilter, completedTaskFilter } from "../../Utils/Comparators"
import TaskList from "./TaskList"
import TaskForm from "./TaskForm"
import Summary from "./Summary"
import ControlPanel from "./ControlPanel"
import Alert from "../Alert"
import TaskData from "../../Mock/Tasks"
import TaskModel from "../../Models/TaskModel"

/**
 * Компонент менеджера задач
 */
class TaskManager extends Component {
  constructor(props) {
    super(props)
    this.createTask = this.createTask.bind(this)
    this.removeTask = this.removeTask.bind(this)
    this.toggleTask = this.toggleTask.bind(this)
    this.toggleImportant = this.toggleImportant.bind(this)
    this.handleShowActive = this.handleShowActive.bind(this)
    this.handleShowCompleted = this.handleShowCompleted.bind(this)
    this.createError = this.createError.bind(this)
    this.clearError = this.clearError.bind(this)

    this.state = {
      tasks: [],
      showActive: true,
      showCompleted: true,
      error: null,
    }
  }

  componentDidMount() {
    TaskData.map((data) => this.createTask(data))
  }

  handleShowActive() {
    this.setState((state) => ({
      showActive: !state.showActive,
    }))
  }

  handleShowCompleted() {
    this.setState((state) => ({
      showCompleted: !state.showCompleted,
    }))
  }

  toggleTask(id) {
    this.updateTask(id, (task) => new TaskModel({ ...task, done: !task.done }))
  }

  toggleImportant(id) {
    this.updateTask(id, (task) => new TaskModel({ ...task, important: (task.important + 1) % 4 }))
  }

  createTask(data) {
    this.setState((state) => {
      const { tasks } = state
      const newTask = new TaskModel(data)

      const existTask = tasks.findIndex(
        (task) => task.title.toLowerCase() === newTask.title.toLowerCase(),
      )
      if (existTask !== -1) {
        return { error: `Task "${data.title}" already exist` }
      }

      return { tasks: [newTask, ...tasks] }
    })
  }

  removeTask(id) {
    this.setState((state) => {
      const newTasks = state.tasks.filter((task) => task.id !== id)

      return { tasks: [...newTasks] }
    })
  }

  updateTask(id, callback) {
    this.setState((state) => {
      const { tasks } = state
      const existTask = tasks.find((element) => element.id === id)
      const filteredTasks = tasks.filter((task) => task.id !== id)
      const newTask = callback(existTask, state)

      return { tasks: [newTask, ...filteredTasks] }
    })
  }

  createError(message) {
    if (message === null) {
      return null
    }

    clearTimeout(this.timerId)
    this.timerId = setTimeout(this.clearError, 5000)

    return (
      <div>
        <Alert type="danger">{message}</Alert>
        <br />
      </div>
    )
  }

  clearError() {
    this.setState(() => ({ error: null }))
  }

  render() {
    const {
      tasks, showActive, showCompleted, error,
    } = this.state

    const totalTasks = [
      ...(showActive ? tasks.filter(activeTaskFilter).sort(byCreatedAtDesc) : []),
      ...(showCompleted ? tasks.filter(completedTaskFilter).sort(byCreatedAtDesc) : []),
    ]

    return (
      <div className="task-manager container">
        <div className="row">
          <div className="col-md-6">
            <TaskForm createTask={this.createTask} />
            <br />
            <ControlPanel
              showActive={showActive}
              showCompleted={showCompleted}
              showActiveHandler={this.handleShowActive}
              showCompletedHandler={this.handleShowCompleted}
            />
            <br />
            {this.createError(error)}
            <TaskList
              tasks={totalTasks}
              handleToggleTask={this.toggleTask}
              handleRemoveTask={this.removeTask}
              handleToggleImportant={this.toggleImportant}
            />
          </div>
          <div className="col-md-6">
            <Summary tasks={tasks} />
          </div>
        </div>

      </div>
    )
  }
}

export default TaskManager
