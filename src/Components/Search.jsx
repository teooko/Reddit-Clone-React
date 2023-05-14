import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export const Search = () => {
    return (
        <div class="headerSearch">
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: '#676c72',
                fontSize: '20px',
                marginRight: '9px'}}/>
            <input type="text" id="headerInput" placeholder="Search Reddit" />
      </div>
    )
}