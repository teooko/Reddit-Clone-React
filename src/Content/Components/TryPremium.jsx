import { TryPremiumDetails } from "./TryPremiumDetails"
import { AsideButton } from "./AsideButton"
export const TryPremium = () => {
    return (
        <div class="card" id="premium">
            <TryPremiumDetails />
            <AsideButton cssClass={"premiumTryButton"} content={"Try Now"} />
        </div>
    )
}