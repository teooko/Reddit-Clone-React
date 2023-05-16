import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const FeedButton = ({icon}) => {
    return <FontAwesomeIcon icon={icon} style={{color: '#d7dadc',
  fontSize: '20px',
  padding: '6px',
  width: '25px'}} className="squareButton"/>
}