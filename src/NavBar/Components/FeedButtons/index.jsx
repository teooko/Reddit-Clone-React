import { Button } from './Button'
import { faArrowTrendUp, faCoins, faRocket, faPlus } from '@fortawesome/free-solid-svg-icons'
import { faCommentDots, faBell } from '@fortawesome/free-regular-svg-icons'

export const FeedButtons = () => {
    return (
        <div class='headerButtons'>
            <Button icon={faArrowTrendUp} />
            <Button icon={faCoins} />
            <Button icon={faRocket} />
            <span class="headerButtonDivider"></span>
            <Button icon={faCommentDots} />
            <Button icon={faBell} />
            <Button icon={faPlus} />
        </div>
    )
}