import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const PostButton = ({icon, name=''}) => {
    return (
        <button class="postButton">
            <FontAwesomeIcon icon={icon} id="icon" />
            {name !== '' && <span style={{marginLeft: '5px'}}>{name}</span>}
        </button>
    )
}