import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFan } from '@fortawesome/free-solid-svg-icons'
import { ProfilePicture } from './ProfilePicture'

export const ProfileDetails = () => {
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
