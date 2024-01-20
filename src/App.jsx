import './App.css'
import { Header } from '@/components/Header'
import { SponsorItemList } from '@/components/SponsorItemList'
import { Hero } from '@/components/Hero'
import Nft19914 from '@/assets/nft-19914.png'
import { NftCardList, nfts } from '@/components/NftCardList'
import { NftCardWithText } from '@/components/nftCardWithText'
import { LogoWithText } from './components/LogoWithText'
import ethLogo from '@/assets/eth-logo.png'
import ethLogoGrey from '@/assets/eth-logo-grey.png'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="page-container">
        <Hero heroImage={Nft19914} />
        <NftCardWithText
          nftData={nfts[0]}
          title="Initial Release 05/02"
          descriptionTop="We have released four limited edition NFTs early which can be bid on via OpenSea"
          descriptionBottom="These will be the only four of these NFTs we ever make, so be sure not to miss out!
                            50% of proceeds go to charity."
          color="orange"
          imageOnRight
        />
        <SponsorItemList />
        <NftCardList />
        <div className="logo-with-text-container">
          <LogoWithText
            image={ethLogo}
            title="An NFT like no other"
            descriptionTop="Don’t miss out on the release of our new NFT. Sign up below to receive updates when we go live on 18/9."
            descriptionBottom="Don’t miss out on the release of our new NFT. Sign up below to receive updates when we go live on 18/9.Don’t miss out on the release of our new NFT. "
          />
          <LogoWithText
            image={ethLogoGrey}
            title="An NFT like no other"
            descriptionTop="Don’t miss out on the release of our new NFT. Sign up below to receive updates when we go live on 18/9."
            descriptionBottom="Don’t miss out on the release of our new NFT. Sign up below to receive updates when we go live on 18/9.Don’t miss out on the release of our new NFT. "
          />
        </div>
        <NftCardWithText
          nftData={nfts[3]}
          title="Initial Release 05/02"
          descriptionTop="We have released four limited edition NFTs early which can be bid on via OpenSea"
          descriptionBottom="These will be the only four of these NFTs we ever make, so be sure not to miss out!
                            50% of proceeds go to charity."
          color="green"
        />
        <Hero heroImage={Nft19914} />
      </div>
    </div>
  )
}

export default App
