import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faHouse } from '@fortawesome/free-solid-svg-icons'

export const FeedDropDown = ({onClick, clicked}) => {
    return (
        <button class="dropDown" onClick={onClick} style={ clicked ? { border: '1px solid #343536', borderRadius: '4px' } : { border: 'solid 1px transparent' }}>
            <div class="dropDownSelected">
                <FontAwesomeIcon icon={faHouse}
                    style={{
                        color: '#d7dadc',
                        fontSize: '20px',
                        marginRight: '8px'
                    }} />
                Home
            </div>

            <FontAwesomeIcon icon={faChevronDown} style={{ size: '20px' }} />
        </button>
    )
}
