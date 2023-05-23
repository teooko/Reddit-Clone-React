import { ProfilePicture } from '../../../../Components/ProfilePicture'
import { Input } from './Input'
import { Button } from './Button'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faImage } from '@fortawesome/free-regular-svg-icons'
import avatarDefault from './avatarDefault.png'

export const CreatePost = () => {
    return (
        <div class="card" id="createPost">
            <ProfilePicture image={avatarDefault} cssClass={'userPicture'}/>
            <Input />
            <Button icon = {faImage} />
            <Button icon = {faLink} />
        </div>
    )
}