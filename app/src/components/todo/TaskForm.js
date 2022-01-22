import { useState } from "react"
import PropTypes from "prop-types"

function TaskForm({ createTask }) {
  const [title, setTitle] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()

    if (title !== "") {
      createTask({ title })
      setTitle("")
    }
  }

  return (
    <form className="row" onSubmit={handleSubmit}>
      <div className="form-group col-sm">
        <label htmlFor="task-title-input">
          <div>Task title</div>
          <input
            className="form-control"
            id="task-title-input"
            onChange={(e) => setTitle(e.target.value)}
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

TaskForm.propTypes = {
  createTask: PropTypes.func.isRequired,
}

export default TaskForm
