import homeSnoo from "./../Assets/homeSnoo.png"

export const HomeHeader = () => {
    return (
        <div class="homeHeader">
            <img src={homeSnoo} class="homeSnoo" />
            <div class="homeTitle">Home</div>
        </div>
    )
}
