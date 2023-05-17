export const Post = ({ posts }) => {
    return (
        <div class="card" id="postCard">
            <div class="upvoteBar">
                <div class="upvotes">
                    <button class="voteButton" id="upvoteButton">
                        <i class="fa-solid fa-up-long" id="arrowUp"></i>
                    </button>
                    {posts[0].likes}
                    <button class="voteButton" id="downvoteButton">
                        <i class="fa-solid fa-down-long" id="arrowDown"></i>
                    </button>

                </div>
            </div>
            <div class="post">
                <div class="postDetails">
                    <img src="https://picsum.photos/seed/${
                      postResponse.data[i].tags[2]
                    }/200" class="subredditImage"></img>
                    <div class="subredditName">r/{posts[0].tags[2].replaceAll(' ', '_')}</div>
                    <i class="fa-solid fa-circle"></i>
                    <div class="postedBy">Posted by u/{
                        posts[0].owner.firstName
                    }_{posts[0].owner.lastName}</div>
                    <div class="timePosted">{
                        Math.abs(daysDiff) > 0
                            ? daysDiff === 1
                                ? daysDiff + ' day ago'
                                : daysDiff + ' days ago'
                            : hoursDiff === 1
                                ? hoursDiff + ' hour ago'
                                : hoursDiff + ' hours ago'
                    }</div>
                </div>
                <div class="postTitle">{posts[0].text}</div>
                <img src={
                    posts[0].image
                } class="postImage" />
                <div class="postInteractionBar">
                    <button class="postButton">
                        <i class="fa-regular fa-comment" id="icon"></i>
                        {
                            posts[0].total === 1
                                ? posts[0].total + ' Comment'
                                : posts[0].total + ' Comments'
                        }
                    </button>
                    <button class="postButton">
                        <i class="fa-solid fa-gift" id="icon"></i>
                        Award
                    </button>
                    <button class="postButton">
                        <i class="fa-solid fa-share" id="icon"></i>
                        Share
                    </button>
                    <button class="postButton">
                        <i class="fa-regular fa-bookmark" id="icon"></i>
                        Save
                    </button>
                    <button class="postButton" >
                        <i class="fa-solid fa-ellipsis"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}