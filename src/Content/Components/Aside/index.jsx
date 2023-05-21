import { TryPremium } from "./TryPremium"
import { Home } from "./Home"
import { Footer } from "./Footer"
import { BackTop } from "./BackTop"

export const Aside = () => {
    return (
        <aside>
            <TryPremium />
            <Home />
            <Footer />
            <BackTop />
        </aside>
    )
}
