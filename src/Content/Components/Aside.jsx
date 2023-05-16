export const Aside = () => {
    return (
        <aside>
                <div class="card" id="premium">
                    <div class="premium">
                        <i class="fa-solid fa-shield-halved"></i>

                        <div class="premiumText">
                            <div class="premiumTitle">Reddit Premium</div>
                            <div class="premiumDescription">
                                The best Reddit experience, with monthly Coins
                            </div>
                        </div>
                    </div>

                    <button class="premiumTryButton">Try Now</button>
                </div>

                <div class="card" id="home">
                    <div class="homeBanner"></div>

                    <div class="home">
                        <div class="homeHeader">
                            <div class="homeSnoo"></div>
                            <div class="homeTitle">Home</div>
                        </div>

                        <div class="homeDescription">
                            Your personal Reddit frontpage. Come here to check in with your
                            favorite communities.
                        </div>

                        <hr class="homeDivider" />

                        <div class="homeButtons">
                            <button class="homePostButton">Create Post</button>
                            <button class="homeCommunityButton">Create Community</button>
                        </div>
                    </div>
                </div>

                <div class="card" id="footer">
                    <table>
                        <tbody>
                            <tr>
                                <td>User Agreement</td>
                                <td>Content Policy</td>
                            </tr>
                            <tr>
                                <td>Privacy Policy</td>
                                <td>Moderator Code Of Conduct</td>
                            </tr>
                        </tbody>
                    </table>

                    <hr class="footerDivider" />

                    <table>
                        <tbody>
                            <tr>
                                <td>English</td>
                                <td>Deutsch</td>
                            </tr>
                            <tr>
                                <td>Français</td>
                                <td>Español</td>
                            </tr>
                            <tr>
                                <td>Italiano</td>
                                <td>Português</td>
                            </tr>
                        </tbody>
                    </table>

                    <hr class="footerDivider" />

                    <div class="copyright">Reddit Inc &copy; 2023. All rights reserved</div>
                </div>

                <button onclick="goToTop()" class="homePostButton" id="backToTop">
                    Back to Top
                </button>
            </aside>
    )
}