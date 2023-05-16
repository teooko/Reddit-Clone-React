import { ProfilePicture } from './ProfilePicture'
import { CreatePostInput } from './CreatePostInput'
import { CreatePostButton } from './CreatePostButton'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faImage } from '@fortawesome/free-regular-svg-icons'

export const CreatePost = () => {
    return (
        <div class="card" id="createPost">
            <ProfilePicture />
            <CreatePostInput />
            <CreatePostButton icon = {faImage} />
            <CreatePostButton icon = {faLink} />
        </div>
    )
}