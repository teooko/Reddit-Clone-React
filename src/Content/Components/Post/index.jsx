import { VoteBar } from "./Components/VoteBar"
import { PostHeader } from "./Components/PostHeader"
import { PostInteractionBar } from "./Components/PostInteractionBar"

export const Post = ({ post }) => {
    return (
        <div class="card" id="postCard">
            <VoteBar likes={post.likes}/>
            <div class="post">
                <PostHeader title={post.text} subreddit={post.tags[2]} publishDate={post.publishDate} firstName={post.owner.firstName} lastName={post.owner.lastName}/>
                <img src={post.image} class="postImage"></img>
                <PostInteractionBar id={post.id}/>
            </div>
        </div>
    )
}