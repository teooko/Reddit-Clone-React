
import { useState, useEffect } from "react";

export const usePostsManager = (client) => {
    const [page, setPage] = useState(0);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchPosts = async () => {
        setLoading(true);
        let response = await client.get(`?page=${page}&limit=5`);
        setPosts([...posts, ...response.data.data]);
        setLoading(false);
        setPage(page + 1);
    };

    useEffect(() => {
        fetchPosts();
    }, [])

    const handleScroll = () => {
        const reachedEndOfPage =
            window.innerHeight + window.pageYOffset >= document.documentElement.offsetHeight;

        if (reachedEndOfPage && !loading)
            fetchPosts();
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading]);

    return { loading, posts };
}