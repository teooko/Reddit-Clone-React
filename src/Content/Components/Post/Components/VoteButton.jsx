import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const VoteButton = ({ icon, buttonId, iconId, handleVote, color }) => {
    return (
        <button class="voteButton" id={buttonId} onClick={handleVote}>
            <FontAwesomeIcon icon={icon} id={iconId} />
        </button>
    )
}