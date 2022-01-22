import PropTypes from "prop-types"

function Alert({ type, children }) {
  return children && <div className={`alert alert-${type}`}>{children}</div>
}

Alert.defaultProps = {
  type: "info",
  children: null,
}

Alert.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
}

export default Alert
