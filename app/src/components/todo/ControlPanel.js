import PropTypes from "prop-types"
import ToggleBadge from "./TaggleBadge"

function ControlPanel({
  showActive,
  showActiveHandler,
  showCompleted,
  showCompletedHandler,
}) {
  return (
    <div className="control-panel row">
      <div className="col">
        Show:
        <ToggleBadge status={showActive} handler={showActiveHandler}>
          Active
        </ToggleBadge>
        <ToggleBadge status={showCompleted} handler={showCompletedHandler}>
          Completed
        </ToggleBadge>
      </div>
    </div>
  )
}

ControlPanel.defaultProps = {
  showActive: true,
  showCompleted: true,
}

ControlPanel.propTypes = {
  showActive: PropTypes.bool,
  showActiveHandler: PropTypes.func.isRequired,
  showCompleted: PropTypes.bool,
  showCompletedHandler: PropTypes.func.isRequired,
}

export default ControlPanel
