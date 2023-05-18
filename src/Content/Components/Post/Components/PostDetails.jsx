import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { PostTime } from "./PostTime"

export const PostDetails = ({ subreddit, publishDate, firstName, lastName }) => {
    return (
        <div class="postDetails">
            <img src={`https://picsum.photos/seed/${subreddit}/200`} class="subredditImage"></img>

            <div class="subredditName">
                r/{subreddit.replaceAll(' ', '_')}
            </div>

            <FontAwesomeIcon icon={faCircle} className='Circle' />

            <div class="postedBy">
                Posted by u/{firstName}_{lastName}
            </div>

            <PostTime publishDate={publishDate} />
        </div>
    )
}
