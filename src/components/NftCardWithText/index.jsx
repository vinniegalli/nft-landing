/* eslint-disable react/prop-types */
import { NftCard } from '@/components/NftCard'
import './style.css'

export function NftCardWithText(props) {
  const {
    nftData,
    title,
    descriptionTop,
    descriptionBottom,
    color,
    imageOnRight,
  } = props
  return (
    <div
      className={`nft-card-with-text ${color} ${
        imageOnRight ? 'image-on-right' : ''
      }`}
    >
      <NftCard
        name={nftData.name}
        image={nftData.image}
        daysLeft={nftData.daysLeft}
        price={nftData.price}
        number={nftData.number}
      />
      <div className="nft-card-with-text-text">
        <h3>{title}</h3>
        <p>{descriptionTop}</p>
        <p>{descriptionBottom}</p>
        <span className="nft-card-with-text-text-check-it">Check it out</span>
      </div>
    </div>
  )
}
