import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const FeedSortButton = ({ icon, name='' }) => {
    return (
        <button class="feedButton">
            <FontAwesomeIcon icon={icon} id="icon" />
            {name !== '' && <span style={{marginLeft: '5px'}}>{name}</span>}
        </button>
    )
}