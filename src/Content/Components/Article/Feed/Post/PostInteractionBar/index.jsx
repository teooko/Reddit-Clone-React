import envConfig from '../../../../../../config'
import axios from 'axios'
import { faGift, faShare, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { faComment, faBookmark } from '@fortawesome/free-regular-svg-icons'
import { Button } from './Button'
import { useState, useEffect } from 'react'

export const PostInteractionBar = ({ comments }) => {

    return (
        <div class="postInteractionBar">
            <Button icon={faComment} name={
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