import { HomeHeader } from "./HomeHeader"
import homeBanner from "./../Assets/homeBanner.png"
import { HomeButtons } from "./HomeButtons"

export const Home = () => {
    return (
        <div class="card" id="home">
            <img src={homeBanner} class="homeBanner" />

            <div class="home">
                <HomeHeader />
                <div class="homeDescription">
                    Your personal Reddit frontpage. Come here to check in with your
                    favorite communities.
                </div>

                <hr class="homeDivider" />

                <HomeButtons />
            </div>
        </div>
    )
}