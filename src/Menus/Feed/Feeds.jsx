import { IconButton } from "./IconButton"
import { SectionTitle } from "./SectionTitle"
import { faHouse, faArrowTrendUp, faRocket} from "@fortawesome/free-solid-svg-icons"

export const Feeds = () => {
    return (
        <>
            <SectionTitle title={'feeds'} />
            <IconButton icon={faHouse} title="Home" />
            <IconButton icon={faArrowTrendUp} title="Popular" />
            <IconButton icon={faRocket} title="All" />
        </>
    )
}