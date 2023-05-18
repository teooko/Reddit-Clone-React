import { AsideButton } from "./AsideButton"

export const HomeButtons = () => {
    return (
        <div class="homeButtons">
            <AsideButton cssClass={"homePostButton"} content={"Create Post"} />
            <AsideButton cssClass={"homeCommunityButton"} content={"Create Community"} />
        </div>
    )
}