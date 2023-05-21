import envConfig from '../../../../../../config'
import axios from 'axios'
import { faGift, faShare, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { faComment, faBookmark } from '@fortawesome/free-regular-svg-icons'
import { Button } from './Button'
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
            <Button icon={faComment} name={loading ? '' :
                    comments === 1
                        ? comments + ' Comment'
                        : comments + ' Comments'
                } />
            <Button icon={faGift} name={"Award"} />
            <Button icon={faShare} name={"Share"} />
            <Button icon={faBookmark} name={"Save"} />
            <Button icon={faEllipsis} name={""} />
        </div>
    )
}