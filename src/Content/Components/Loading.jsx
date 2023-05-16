import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
export const Loading = () => {
    return (
        <div id="loading">
            <FontAwesomeIcon icon={faSpinner} className='loading'/>
        </div>
    )
}