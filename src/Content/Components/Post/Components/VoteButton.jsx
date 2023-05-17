import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const VoteButton = ({ icon, buttonId, iconId }) => {
    return (
        <button class="voteButton" id={buttonId}>
            <FontAwesomeIcon icon={icon} id={iconId} />
        </button>
    )
}