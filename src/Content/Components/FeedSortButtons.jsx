import { FeedSortButton } from "./FeedSortButton"
import { faRocket, faBahai, faRankingStar, faEllipsis, faFireFlameSimple } from '@fortawesome/free-solid-svg-icons'

export const FeedSortButtons = () => {
    return (
        <div class='FeedSortButtons'>
            <FeedSortButton icon={faRocket} name={'Best'}/>
            <FeedSortButton icon={faFireFlameSimple} name={'Hot'}/>
            <FeedSortButton icon={faBahai} name={'New'}/>
            <FeedSortButton icon={faRankingStar} name={'Top'}/>
            <FeedSortButton icon={faEllipsis}/>
        </div>
    )
}