import { CreatePost } from './CreatePost'
import { FeedSort } from './FeedSort'
import { Feed } from './Feed'

export const Article = () => {
    return (
        <article>
            <CreatePost />
            <FeedSort />
            <Feed />
        </article>
    )
}
