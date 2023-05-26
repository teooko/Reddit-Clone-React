import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const SectionTitle = ({icon, title}) => {
    return (
        <div class="userMenuTitle">
            <FontAwesomeIcon icon={icon} className="userMenuIcon" />
            {title}
        </div>
    )
}