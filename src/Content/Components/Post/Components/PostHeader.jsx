import { PostDetails } from "./PostDetails"

export const PostHeader = ({ title, subreddit, publishDate, firstName, lastName }) => {
    return (
        <div class="post">
            <PostDetails subreddit={subreddit} publishDate={publishDate} firstName={firstName} lastName={lastName} />
            <div class="postTitle">{title}</div>
        </div>
    )
}
