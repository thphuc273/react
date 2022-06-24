import PropsType from 'prop-types' 
function Button({children, version, type, isDisabled}) {
  return (
    <button type={type} disabled = {isDisabled} className={`btn
    btn-${version}`}>
        {children}
    </button>
  )
}

Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisabled: false
}

Button.propsType = {
    children: PropsType.node.isRequired,
    version: PropsType.string,
    type: PropsType.string,
    isDisabled: PropsType.bool,
}

export default Button