import './style.css'

import { NftCard } from '@/components/NftCard'
import Nft12983 from '@/assets/nft-12983.png'
import Nft12984 from '@/assets/nft-12984.png'
import Nft12985 from '@/assets/nft-12985.png'
// import Nft12986 from '@/assets/nft-12986.png'
import Nft12987 from '@/assets/nft-12987.png'

export const nfts = [
  {
    image: Nft12983,
    name: 'Purple Man',
    price: 2.99,
    number: 12983,
    daysLeft: 20,
  },
  {
    image: Nft12984,
    name: 'Beige Man',
    price: 2.0,
    number: 12984,
    daysLeft: 3,
  },
  {
    image: Nft12985,
    name: 'Red Man',
    price: 1.58,
    number: 12985,
    daysLeft: 15,
  },
  // {
  //   image: Nft12986,
  //   name: 'Green Man',
  //   price: 1.23,
  //   number: 12986,
  //   daysLeft: 10,
  // },
  {
    image: Nft12987,
    name: 'Blue Man',
    price: 2.23,
    number: 12987,
    daysLeft: 15,
  },
]

export function NftCardList() {
  return (
    <div className="nft-card-list">
      {nfts.map((nft) => {
        return (
          <NftCard
            key={nft.number}
            image={nft.image}
            name={nft.name}
            price={nft.price}
            number={nft.number}
            daysLeft={nft.daysLeft}
          />
        )
      })}
    </div>
  )
}
