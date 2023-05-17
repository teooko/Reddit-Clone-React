import { VoteBar } from "./Components/VoteBar"
import { PostHeader } from "./Components/PostHeader"
import { PostInteractionBar } from "./Components/PostInteractionBar"

export const Post = ({ posts }) => {
    return (
        <div class="card" id="postCard">
            <VoteBar likes={posts[0].likes}/>
            <div class="post">
            <PostHeader title={posts[0].text} subreddit={posts[0].tags[2]} publishDate={posts[0].publishDate} firstName={posts[0].owner.firstName} lastName={posts[0].owner.lastName}/>
            <img src={posts[0].image} class="postImage"></img>
            <PostInteractionBar />
            </div>
        </div>
    )
}