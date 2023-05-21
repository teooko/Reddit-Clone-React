import { Button } from "./Button"
import { faRocket, faBahai, faRankingStar, faEllipsis, faFireFlameSimple } from '@fortawesome/free-solid-svg-icons'

export const Buttons = () => {
    return (
        <div class='FeedSortButtons'>
            <Button icon={faRocket} name={'Best'}/>
            <Button icon={faFireFlameSimple} name={'Hot'}/>
            <Button icon={faBahai} name={'New'}/>
            <Button icon={faRankingStar} name={'Top'}/>
            <Button icon={faEllipsis}/>
        </div>
    )
}
