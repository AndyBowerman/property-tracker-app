import './Button.scss';

const Button = ({type, text}) => {
  return (
    <button className="button" type={type}>{text}</button>
  )
}

export default Button
