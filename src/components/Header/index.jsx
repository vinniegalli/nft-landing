import Logo from '@/assets/logo.png'
import './style.css'

export function Header() {
  return (
    <nav className="header">
      <div className="header-wrapper">
        <img className="header-logo" src={Logo} alt="App Logo" />
        <span className="header-singup">Sign up</span>
      </div>
    </nav>
  )
}
