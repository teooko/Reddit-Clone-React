import { Input } from "./Input"
import { SectionTitle } from "./SectionTitle"
import { IconButton } from "./IconButton"
import { ImageButton } from "./ImageButton"
import { Feeds } from "./Feeds"
import { faPlus, faHouse, faArrowTrendUp, faRocket, faCoins, faShieldHalved, faShirt } from "@fortawesome/free-solid-svg-icons"
import { faBell } from "@fortawesome/free-solid-svg-icons"
import { Other } from "./Other"
export const User = () => {
  return (
    <div class="headerMenuOpen" tabindex="0">
      <Input />
      <SectionTitle title={'your communities'} />
      <IconButton icon={faPlus} title="Create Community" />
      <SectionTitle title={'following'} />
      <Feeds />
      <Other />
    </div>
  )
}