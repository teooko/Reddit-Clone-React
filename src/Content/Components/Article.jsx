import envConfig from '../../config'
import { CreatePost } from './CreatePost'
import { FeedSort } from './FeedSort'
import { Loading } from './Loading'
import { Feed } from './Feed'
import axios from 'axios'
import { useState, useEffect } from 'react'


const client = axios.create({
    baseURL: 'https://dummyapi.io/data/v1/post', headers: {
        'app-id': envConfig.API_KEY
    }
})

export const Article = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(1);

    useEffect(() => {
        const fetchPost = async () => {
            let response = await client.get('?page=0&limit=5');
            setPosts(response.data.data);
            setLoading(0)

        };
        fetchPost();

    }, [])


    console.log(posts[0]);
    return (
        <article>
            <CreatePost />
            <FeedSort />
            {!loading && <Feed posts={posts} />}
            <Loading />
        </article>
    )
}