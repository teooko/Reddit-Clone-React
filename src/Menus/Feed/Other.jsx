import { IconButton } from "./IconButton"
import { ImageButton } from "./ImageButton"
import { SectionTitle } from "./SectionTitle"
import { faPlus, faCoins, faShieldHalved, faShirt } from "@fortawesome/free-solid-svg-icons"
import { faBell } from "@fortawesome/free-solid-svg-icons"

export const Other = () => {
    return (
        <>
            <SectionTitle title={'other'} />
            <ImageButton title={'User Settings'} />
            <ImageButton title={'Messages'} />
            <IconButton icon={faPlus} title="Create Post" />
            <IconButton icon={faBell} title="Notifications" />
            <IconButton icon={faCoins} title="Coins" />
            <IconButton icon={faShieldHalved} title="Premium" />
            <IconButton icon={faShirt} title="Avatar" />
        </>
    )
}