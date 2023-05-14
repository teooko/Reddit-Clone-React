import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFan, faChevronDown } from '@fortawesome/free-solid-svg-icons'

export const ProfileDropDown = () => {
    return (
        <button class="dropDown" id="userMenu">
            <div class="userMenuDetails">

            <div class="userMenuPicture"></div>

            <div class="userMenuText">
                username
                <div class="userMenuKarma">
                <FontAwesomeIcon icon={faFan} style={{color: '#ff4500',
                    fontSize: '12px'}}/>
                1.3k karma
                </div>
            </div>
            </div>
            
            <FontAwesomeIcon icon={faChevronDown} style={{color: '#676c72',
                    marginRight: '7px'}}/>
      </button>
    )
}