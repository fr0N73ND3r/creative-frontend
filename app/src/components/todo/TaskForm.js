import { Component } from "react"
import PropTypes from "prop-types"

class TaskForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    e.preventDefault()
    this.setState({ title: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    const { title } = this.state
    const { createTask } = this.props

    if (title !== "") {
      createTask({ title })

      this.setState({ title: "" })
    }
  }

  render() {
    const { title } = this.state
    return (
      <form className="row" onSubmit={this.handleSubmit}>
        <div className="form-group col-sm">
          <label htmlFor="task-title-input">
            <div>Task title</div>
            <input
              className="form-control"
              id="task-title-input"
              onChange={this.handleChange}
              value={title}
            />
          </label>
        </div>
        <div className="col-sm-auto">
          <label htmlFor="task-form-submit">
            &nbsp;
            <br />
            <input
              type="submit"
              id="task-form-submit"
              value="Add task"
              className="btn btn-primary"
            />
          </label>
        </div>
      </form>
    )
  }
}

TaskForm.propTypes = {
  createTask: PropTypes.func.isRequired,
}

export default TaskForm
