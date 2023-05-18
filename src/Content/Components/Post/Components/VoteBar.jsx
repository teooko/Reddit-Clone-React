import { faUpLong, faDownLong } from '@fortawesome/free-solid-svg-icons'
import { VoteButton } from './VoteButton'
import { useState } from 'react'

export const VoteBar = ({ likes }) => {
    const orange = '#ff5414';
    const blue = '#7193ff';
    const gray = '#676c72';

    const [votes, setVotes] = useState(likes)
    const [color, setColor] = useState(gray)

    const handleUpvote = () => {setVotes(likes+1); setColor(orange)};
    const handleDownvote = () => {setVotes(likes-1); setColor(blue)};

    return (
        <div class="upvoteBar">
            <div class="upvotes" style={{color: color}}>
                <VoteButton icon={faUpLong} buttonId={"upvoteButton"} iconId={"arrowUp"} handleVote={handleUpvote} color={color}/>
                    {votes}
                <VoteButton icon={faDownLong} buttonId={"downvoteButton"} iconId={"arrowDown"} handleVote={handleDownvote} color={color}/>
            </div>
        </div>
    )
}