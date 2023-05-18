import envConfig from '../../../../config'
import axios from 'axios'
import { faGift, faShare, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { faComment, faBookmark } from '@fortawesome/free-regular-svg-icons'
import { PostButton } from './PostButton'
import { useState, useEffect } from 'react'

const client = axios.create({
    baseURL: 'https://dummyapi.io/data/v1/post', headers: {
        'app-id': envConfig.API_KEY
    }
})

export const PostInteractionBar = ({ id }) => {
    const [comments, setComments] = useState('');
    const [loading, setLoading] = useState(0);

    const fetchComments = async () => {
        let response = await client.get(`/${id}/comment`);
        setComments(response.data.total);
        setLoading(0);
    }

    useEffect(() => {
        fetchComments();
    }, [])

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