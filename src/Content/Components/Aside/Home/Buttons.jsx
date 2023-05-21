import { Button } from "../Button"

export const Buttons = () => {
    return (
        <div class="homeButtons">
            <Button cssClass={"homePostButton"} content={"Create Post"} />
            <Button cssClass={"homeCommunityButton"} content={"Create Community"} />
        </div>
    )
}