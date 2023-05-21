import { faUpLong, faDownLong } from '@fortawesome/free-solid-svg-icons'
import { Button } from './Button'
import { useState } from 'react'

export const VoteBar = ({ likes }) => {
    const orange = '#ff5414';
    const blue = '#7193ff';
    const gray = '#676c72';

    const [votes, setVotes] = useState(likes)
    const [color, setColor] = useState(gray)

    const handleUpvote = () => {
        if (votes === likes + 1) {
            setVotes(likes);
            setColor(gray);
        }
        else {
            setVotes(likes + 1);
            setColor(orange)
        }
    };

    const handleDownvote = () => {
        if (votes === likes - 1) {
            setVotes(likes);
            setColor(gray);
        }
        else {
            setVotes(likes - 1);
            setColor(blue)
        }
    };

    return (
        <div class="upvoteBar">
            <div class="upvotes" style={{ color: color }}>
                <Button icon={faUpLong} buttonId={"upvoteButton"} iconId={"arrowUp"} handleVote={handleUpvote} color={color === blue ? gray : color}/>
                {votes}
                <Button icon={faDownLong} buttonId={"downvoteButton"} iconId={"arrowDown"} handleVote={handleDownvote} color={color === orange ? gray : color}/>
            </div>
        </div>
    )
}