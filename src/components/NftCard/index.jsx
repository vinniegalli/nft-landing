import './style.css'
import ethLogo from '@/assets/eth-logo.png'

export function NftCard(props) {
  // eslint-disable-next-line react/prop-types
  const { image, number, name, price, daysLeft } = props
  return (
    <div className="nft-card">
      <img className="nft-card-image" src={image} alt={`nft card ${name}`} />
      <div className="nft-card-details">
        <span className="nft-card-details-series">Gloop Series</span>
        <span className="nft-card-details-top-bid">Top bid</span>
        <span className="nft-card-details-name">{name}</span>
        <span className="nft-card-details-price">
          <img
            className="nft-card-details-eth-logo"
            src={ethLogo}
            alt="ethereum logo"
          />
          {price} ETH
        </span>
        <span className="nft-card-details-number">#{number}</span>
        <span className="nft-card-details-days-left">{daysLeft} days left</span>
      </div>
    </div>
  )
}
