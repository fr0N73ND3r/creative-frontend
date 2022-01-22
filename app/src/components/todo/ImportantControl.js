import PropTypes from "prop-types"
import { IMPORTANT_LEVELS } from "../../Models/TaskModel"

function ImportantControl({
  level,
  handleClick,
}) {
  const gray = {
    filter: "grayscale(100%)",
  }
  return (
    <span className="important-wrapper">
      <div role="button" className="important-btn" onClick={handleClick} onKeyPress={handleClick} tabIndex="0">
        {
          IMPORTANT_LEVELS.map((important) => (
            <span
              style={level < important ? gray : {}}
              key={important}
              className={`important-level ${level >= important ? "active" : ""}`}
            >
              🔥
            </span>
          ))
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
