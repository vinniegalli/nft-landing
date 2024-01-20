import { Button } from '@/components/Button'
import './style.css'

export function Hero(props) {
  // eslint-disable-next-line react/prop-types
  const { heroImage } = props
  return (
    <section className="hero">
      <div className="hero__left">
        <span className="hero__left-lauching"> Lauching soon</span>
        <h1 className="hero__left-heading">An NFT like no other</h1>
        <p>
          Don’t miss out on the release of our new NFT. Sign up below to receive
          updates when we go live.
        </p>
        <Button className="button" text="Sign up" />
      </div>
      <div className="hero__rights">
        <div className="hero__right-image-wrapper">
          <img className="hero__right-image" src={heroImage} alt="Hero Image" />
          <div className="hero__right-image-shadow"></div>
        </div>
      </div>
    </section>
  )
}
