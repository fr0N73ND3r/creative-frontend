import PropTypes from "prop-types"

function Progress({
  current,
  total,
}) {
  const percent = !current || !total
    ? 0
    : (current * 100) / total

  return (
    <div className="progress">
      <div className="progress-bar" style={{ width: `${percent}%` }} />
    </div>
  )
}

Progress.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
}

export default Progress
