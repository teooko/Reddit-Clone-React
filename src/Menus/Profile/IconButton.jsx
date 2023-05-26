import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const IconButton = ({ icon, title }) => {
    return (
        <div class="userMenuIconButton">
            <FontAwesomeIcon icon={icon} class='userMenuButton' />
            {title}
        </div>
    )
}