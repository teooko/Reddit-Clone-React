export const BackTop = () => {
    const goToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      };

    return (
        <button onClick={goToTop} class="homePostButton" id="backToTop">
            Back to Top
        </button>
    )
}
