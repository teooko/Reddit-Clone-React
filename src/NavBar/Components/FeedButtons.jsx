import { FeedButton } from './FeedButton'
import { faArrowTrendUp, faCoins, faRocket, faPlus } from '@fortawesome/free-solid-svg-icons'
import { faCommentDots, faBell } from '@fortawesome/free-regular-svg-icons'

export const FeedButtons = () => {
    return (
        <div class='headerButtons'>
            <FeedButton icon={faArrowTrendUp} />
            <FeedButton icon={faCoins} />
            <FeedButton icon={faRocket} />
            <span class="headerButtonDivider"></span>
            <FeedButton icon={faCommentDots} />
            <FeedButton icon={faBell} />
            <FeedButton icon={faPlus} />
        </div>
    )
}
