import PropTypes from "prop-types"

function ToggleBadge({
  children,
  status,
  handler,
}) {
  const statusClass = status ? " badge-success" : " badge-primary"
  return (
    <div role="button" onClick={handler} onKeyPress={handler} className={`badge ${statusClass}`} tabIndex="0">
      {children}
    </div>
  )
}

ToggleBadge.propTypes = {
  children: PropTypes.node.isRequired,
  status: PropTypes.bool.isRequired,
  handler: PropTypes.func.isRequired,
}

export default ToggleBadge
