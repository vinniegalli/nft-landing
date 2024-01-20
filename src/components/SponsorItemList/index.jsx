import LogoBoomerang from '@/assets/logo-boomerang.png'
import LogoBlimp from '@/assets/logo-blimp.png'
// import LogoOpenDoor from '@/assets/logo-opendoor.png'
import LogoDroplet from '@/assets/logo-droplet.png'
import LogoQrco from '@/assets/logo-qrco.png'
import { SponsorItem } from '../SponsorItem'
import './style.css'

export function SponsorItemList() {
  return (
    <div className="sponsor-item-list">
      <SponsorItem logo={LogoBoomerang} text="Boomerang" />
      <SponsorItem logo={LogoBlimp} text="Blimp" />
      <SponsorItem logo={LogoQrco} text="Qrco" />
      {/* <SponsorItem logo={LogoOpenDoor} text="OpenDoor" /> */}
      <SponsorItem logo={LogoDroplet} text="Droplet" />
    </div>
  )
}
