import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Button = ({ icon, buttonId, iconId, handleVote, color }) => {

    return (
        <button class="voteButton" id={buttonId} onClick={handleVote}>
            <FontAwesomeIcon icon={icon} id={iconId} style={{ color: color }} />
        </button>
    )
}