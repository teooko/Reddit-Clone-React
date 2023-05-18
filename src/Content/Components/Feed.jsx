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

export const Feed = () => {
    const [page, setPage] = useState(0);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(1);

    const handlePosts = (response) => {
        const newPosts = [...posts, ...response];
        setPosts(newPosts);
    }

    const fetchPost = async () => {
        let response = await client.get(`?page=${page}&limit=5`);
        handlePosts(response.data.data);
        setLoading(0);
        setPage(page+1);
    };

    useEffect(() => {
        fetchPost();
    }, [])

    const handleScroll = () => {
        const endOfPage =
        window.innerHeight + window.pageYOffset >= document.documentElement.offsetHeight;
    
      if (endOfPage) {
        if (!loading) {
          setLoading(1);
          fetchPost();
        }
      }
    }

    useEffect(() => {  window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    }, [loading]);

    return (
        loading ? <>
            {posts.map(post => <Post post={post}/>)}
            <Loading />
        </> : posts.map(post => <Post post={post} />) 
    )
}