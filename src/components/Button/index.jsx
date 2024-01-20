import './style.css'
export function Button(props) {
  // eslint-disable-next-line react/prop-types
  const { text } = props
  return <button className="button">{text}</button>
}
