import { PostDetails } from "./PostDetails"
import { PostInteractionBar } from "./PostInteractionBar"
export const PostHeader = ({ title, subreddit, publishDate, firstName, lastName }) => {
    return (
        <div class="post">
                <PostDetails subreddit={subreddit} publishDate={publishDate} firstName={firstName} lastName={lastName}/>
                <div class="postTitle">{title}</div>
            </div>
    )
}