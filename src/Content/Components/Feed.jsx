import envConfig from '../../config'
import { Post } from "./Post";
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Loading } from './Loading'

const client = axios.create({
    baseURL: 'https://dummyapi.io/data/v1/post', headers: {
        'app-id': envConfig.API_KEY
    }
})

export const Feed = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(1);

    useEffect(() => {
        const fetchPost = async () => {
            let response = await client.get('?page=0&limit=5');
            setPosts(response.data.data);
            setLoading(0)
            console.log(posts[0]);
        };
        fetchPost();

    }, [])

    return (
        loading ? <Loading /> : <Post posts={posts} />
    )
}