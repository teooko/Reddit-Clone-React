import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFan, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { ProfilePicture } from './ProfilePicture'

const ProfileDetails = () => {
	return (
		<div class="userMenuDetails">
			<ProfilePicture />

			<div class="userMenuText">
				username
				<div class="userMenuKarma">
					<FontAwesomeIcon icon={faFan} style={{
						color: '#ff4500',
						fontSize: '12px'
					}} />
					1.3k karma
				</div>
			</div>
		</div>
	)
}

export const ProfileDropDown = () => {
	return (
		<button class="dropDown" id="userMenu">
			<ProfileDetails />

			<FontAwesomeIcon icon={faChevronDown} style={{
				color: '#676c72',
				marginRight: '7px'
			}} />
		</button>
	)
}
