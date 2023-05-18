import envConfig from '../../config'
import { Post } from './Post';
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Loading } from './Loading'

const client = axios.create({
    baseURL: 'https://dummyapi.io/data/v1/post', headers: {
        'app-id': envConfig.API_KEY
    }
})

const usePostsManager = () => {
    const [page, setPage] = useState(0);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchPost = async () => {
        let response = await client.get(`?page=${page}&limit=5`);
        setPosts([...posts, ...response.data.data]);
        setLoading(false);
        setPage(page + 1);
    };

    useEffect(() => {
        fetchPost();
    }, [])

    const handleScroll = () => {
        const endOfPage =
            window.innerHeight + window.pageYOffset >= document.documentElement.offsetHeight;

        if (endOfPage) {
            if (!loading) {
                setLoading(true);
                fetchPost();
            }
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading]);

    return { loading, posts };
}

export const Feed = () => {
    const { loading, posts } = usePostsManager();

    return (
        loading ? <>
            {posts.map(post => <Post post={post} />)}
            <Loading />
        </> : posts.map(post => <Post post={post} />)
    )
}
