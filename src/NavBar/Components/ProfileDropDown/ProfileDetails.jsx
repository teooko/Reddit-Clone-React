import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFan } from '@fortawesome/free-solid-svg-icons'
import { ProfilePicture } from '../../../Components/ProfilePicture'
import avatarDefault from "./avatarDefault.png"
export const ProfileDetails = () => {
	return (
		<div class="userMenuDetails">
			<ProfilePicture  image={avatarDefault} cssClass={'userMenuPicture'}/>

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
