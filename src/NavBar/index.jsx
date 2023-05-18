import { RedditLogo } from './Components/RedditLogo'
import { FeedDropDown } from './Components/FeedDropDown'
import { Search } from './Components/Search';
import { FeedButtons } from './Components/FeedButtons';
import { AdvertiseButton } from './Components/AdvertiseButton';
import { ProfileDropDown } from './Components/ProfileDropDown';

export const NavBar = () => {
    return (
        <header class="card" id="headerCard">
            <RedditLogo/>
            <FeedDropDown />
            <Search />
            <FeedButtons />
            <AdvertiseButton />
            <ProfileDropDown />
        </header>
    )
};
