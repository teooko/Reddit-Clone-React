import { RedditLogo } from './Components/RedditLogo'
import { FeedDropDown } from './Components/FeedDropDown'
import { Search } from './Components/Search';
import { FeedButtons } from './Components/FeedButtons';
import { AdvertiseButton } from './Components/AdvertiseButton';
import { ProfileDropDown } from './Components/ProfileDropDown';
import { Feed } from '../Menus/Feed'

import { useCallback, useState } from 'react';
import { Profile } from '../Menus/Profile';
export const NavBar = () => {
    const [feedClicked, setFeedClicked] = useState(false);
    const [profileClicked, setProfileClicked] = useState(false);

    const handleFeedClick = useCallback((event) => {
        setFeedClicked(!feedClicked);
        event.stopPropagation();
    });

    const handleProfileClick = useCallback((event) => {
        setProfileClicked(!profileClicked);
        event.stopPropagation();
    });

    return (
        <header class="card" id="headerCard">
            <RedditLogo/>
            <FeedDropDown onClick={handleFeedClick} clicked={feedClicked}/>
            {feedClicked ? <Feed onClick = {() => setFeedClicked(!feedClicked)} /> : null}
            <Search />
            <FeedButtons />
            <AdvertiseButton />
            <ProfileDropDown onClick={handleProfileClick} clicked={profileClicked}/>
            {profileClicked ? <Profile onClick = {() => setProfileClicked(!profileClicked)} /> : null}
        </header>
    )
};
