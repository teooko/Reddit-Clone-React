import homeSnoo from "./homeSnoo.png"

export const Header = () => {
    return (
        <div class="homeHeader">
            <img src={homeSnoo} class="homeSnoo" />
            <div class="homeTitle">Home</div>
        </div>
    )
}
