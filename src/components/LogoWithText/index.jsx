/* eslint-disable react/prop-types */
import './style.css'
export function LogoWithText(props) {
  const { image, title, descriptionTop, descriptionBottom } = props

  return (
    <div className="logo-with-text-section">
      <img className="logo-with-text-image" src={image} alt="Logo" />
      <h3>{title}</h3>
      <p>{descriptionTop}</p>
      <p>{descriptionBottom}</p>
    </div>
  )
}
