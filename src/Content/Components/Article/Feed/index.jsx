import { Post } from './Post';
import axios from 'axios'
import { usePostsManager } from '../../../../Hooks/usePostsManager';
import { Loading } from '../../Loading'

const client = axios.create({
    baseURL: 'https://dummyapi.io/data/v1/post', headers: {
        'app-id': process.env.REACT_APP_API_KEY
    }
})

export const Feed = () => {
    const { loading, posts } = usePostsManager(client);
    return (
        loading ? <>
            {posts.map(post => <Post post={post} key={post.id} />)}
            <Loading />
        </> : posts.map(post => <Post post={post} key={post.id} />)
    )
}
