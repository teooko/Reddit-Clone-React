import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const IconButton = ({ icon, title }) => {
    return (
        <div class="headerMenuDefaultButton">
            <FontAwesomeIcon icon={icon} className='headerIcon' />
            {title}
        </div>
    )
}