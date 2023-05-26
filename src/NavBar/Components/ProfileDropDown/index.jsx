import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { ProfileDetails } from './ProfileDetails'


export const ProfileDropDown = ({onClick, clicked}) => {
	return (
		<button class="dropDown" id="userMenu" onClick={onClick} style={ clicked ? { border: '1px solid #343536', borderRadius: '4px' } : { border: 'solid 1px transparent' }}>
			<ProfileDetails/>

			<FontAwesomeIcon icon={faChevronDown} style={{
				size: '20px',
				color: '#676c72',
				marginRight: '7px'
			}} />
		</button>
	)
}
