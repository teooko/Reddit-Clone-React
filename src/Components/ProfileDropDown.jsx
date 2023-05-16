import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { ProfileDetails } from './ProfileDetails'

export const ProfileDropDown = () => {
	return (
		<button class="dropDown" id="userMenu">
			<ProfileDetails />

			<FontAwesomeIcon icon={faChevronDown} style={{
				size: '20px',
				color: '#676c72',
				marginRight: '7px'
			}} />
		</button>
	)
}
