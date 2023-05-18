import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const CreatePostButton = ({ icon }) => {
    return (
        <button class="squareButton">
            <FontAwesomeIcon icon = {icon} className='createIcon'/>
        </button>
    )
}
