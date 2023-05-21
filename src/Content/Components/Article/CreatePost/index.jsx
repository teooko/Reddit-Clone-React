import { ProfilePicture } from './ProfilePicture'
import { Input } from './Input'
import { Button } from './Button'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faImage } from '@fortawesome/free-regular-svg-icons'

export const CreatePost = () => {
    return (
        <div class="card" id="createPost">
            <ProfilePicture />
            <Input />
            <Button icon = {faImage} />
            <Button icon = {faLink} />
        </div>
    )
}