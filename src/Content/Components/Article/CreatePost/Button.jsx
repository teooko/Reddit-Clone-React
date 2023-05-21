import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Button = ({ icon }) => {
    return (
        <button class="squareButton">
            <FontAwesomeIcon icon = {icon} className='createIcon'/>
        </button>
    )
}
