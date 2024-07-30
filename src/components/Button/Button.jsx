import "./_button.scss"

const Button = ({text, icon, onCLick}) => {
  return (
    <div>
      <button className="button" onClick={onCLick}>        
        {text}
        {icon}
      </button>
    </div>
  )
}

export default Button


