
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowRestore } from '@fortawesome/free-regular-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
export const FeedDisplayButton = () => {
    return (
        <button class="feedButton" id="view">
            <FontAwesomeIcon icon={faWindowRestore} style={{fontSize: '20px'}}/>
            <FontAwesomeIcon icon={faAngleDown} />
        </button>
    )
}