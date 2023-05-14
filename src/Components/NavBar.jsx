import { RedditLogo } from './RedditLogo'
import { FeedDropDown } from './FeedDropDown'
import { Search } from './Search';
import { FeedButtons } from './FeedButtons';
import { AdvertiseButton } from './AdvertiseButton';
import { ProfileDropDown } from './ProfileDropDown';

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
