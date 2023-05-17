import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGift, faShare, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { faComment, faBookmark } from '@fortawesome/free-regular-svg-icons'
import { PostButton } from './PostButton'

export const PostInteractionBar = () => {
    return (
        <div class="postInteractionBar">
            <PostButton icon={faComment} name={"10 Comments"} />
                {/*
                    posts[0].total === 1
                        ? posts[0].total + ' Comment'
                        : posts[0].total + ' Comments'*/
                        
                }
            <PostButton icon={faGift} name={"Award"} />
            <PostButton icon={faShare} name={"Share"} />
            <PostButton icon={faBookmark} name={"Save"} />
            <PostButton icon={faEllipsis} name={""} />
        </div>
    )
}