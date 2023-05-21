import { Header } from "./Header"
import homeBanner from "./homeBanner.png"
import { Buttons } from "./Buttons"

export const Home = () => {
    return (
        <div class="card" id="home">
            <img src={homeBanner} class="homeBanner" />

            <div class="home">
                <Header />
                <div class="homeDescription">
                    Your personal Reddit frontpage. Come here to check in with your
                    favorite communities.
                </div>

                <hr class="homeDivider" />

                <Buttons />
            </div>
        </div>
    )
}