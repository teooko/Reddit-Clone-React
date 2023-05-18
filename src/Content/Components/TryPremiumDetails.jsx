import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons'

export const TryPremiumDetails = () => {
    return (
        <div class="premium">
            <FontAwesomeIcon icon={faShieldHalved} className={"Shield"} />

            <div class="premiumText">
                <div class="premiumTitle">Reddit Premium</div>
                <div class="premiumDescription">
                    The best Reddit experience, with monthly Coins
                </div>
            </div>
        </div>
    )
}