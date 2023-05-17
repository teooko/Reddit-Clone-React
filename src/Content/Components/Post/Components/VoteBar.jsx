import { faUpLong, faDownLong } from '@fortawesome/free-solid-svg-icons'
import { VoteButton } from './VoteButton'
export const VoteBar = ({ likes }) => {
    return (
        <div class="upvoteBar">
            <div class="upvotes">
                <VoteButton icon={faUpLong} buttonId={"upvoteButton"} iconId={"arrowUp"} />
                    {likes}
                <VoteButton icon={faDownLong} buttonId={"downvoteButton"} iconId={"arrowDown"} />
            </div>
        </div>
    )
}