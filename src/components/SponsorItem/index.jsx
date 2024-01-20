/* eslint-disable react/prop-types */
import './style.css'

export function SponsorItem(props) {
  const logo = props.logo
  const text = props.text
  return (
    <div className="sponsor-item">
      <img className="sponsor-icon__logo" src={logo} alt="" />
      <span className="sponsor-icon__text">{text}</span>
    </div>
  )
}
