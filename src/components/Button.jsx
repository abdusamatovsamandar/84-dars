import PropTypes from "prop-types"

const Button = ({children , className,}) => {
  return (
    <button className={`px-9 py-2 text-sm bg-bgOp-0 text-white border-[2px] rounded-md ${className}`}>
      {children || `Button`}
    </button>
  )
}


Button.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
}



export default Button
