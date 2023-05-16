import { CreatePost } from './CreatePost'
import { FeedSort } from './FeedSort'
import { Loading } from './Loading'
export const Article = () => {
    return (
        <article>
            <CreatePost />
            <FeedSort />
            <Loading />
        </article>
    )
}