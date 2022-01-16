import PropTypes from "prop-types"
import { IMPORTANT_LEVELS } from "../../Models/TaskModel"

function ImportantControl({
  level,
  handleClick,
}) {
  return (
    <span className="important-wrapper">
      <div role="button" className="important-btn" onClick={handleClick} onKeyPress={handleClick} tabIndex="0">
        {
          IMPORTANT_LEVELS.map((important) => <span key={important} className={`important-level ${level >= important ? "active" : ""}`}>!</span>)
        }
      </div>
    </span>
  )
}

ImportantControl.propTypes = {
  level: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
}

export default ImportantControl
