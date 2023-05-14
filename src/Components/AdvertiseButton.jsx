import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBullhorn } from '@fortawesome/free-solid-svg-icons'

export const AdvertiseButton = () => {
    return (
        <button class="headerAdvertiseButton">
          <FontAwesomeIcon icon={faBullhorn} style={{color: '#d7dadc',
            fontSize: '18px',
            marginTop: '6px',
            marginBottom: '6px',
            marginRight: '6px'}}/>
          Advertise
        </button>
    )
}