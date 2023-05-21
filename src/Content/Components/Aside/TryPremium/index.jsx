import { Details } from "./Details"
import { Button } from "../Button"

export const TryPremium = () => {
    return (
        <div class="card" id="premium">
            <Details />
            <Button cssClass={"premiumTryButton"} content={"Try Now"} />
        </div>
    )
}
