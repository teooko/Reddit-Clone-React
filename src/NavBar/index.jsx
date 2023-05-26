import { RedditLogo } from './Components/RedditLogo'
import { FeedDropDown } from './Components/FeedDropDown'
import { Search } from './Components/Search';
import { FeedButtons } from './Components/FeedButtons';
import { AdvertiseButton } from './Components/AdvertiseButton';
import { ProfileDropDown } from './Components/ProfileDropDown';
import { Feed } from '../Menus/Feed'

import { useCallback, useState } from 'react';
export const NavBar = () => {
    const [feedClicked, setFeedClicked] = useState(false);

    const handleClick = useCallback((event) => {
        setFeedClicked(!feedClicked);
        event.stopPropagation();
    }, [feedClicked, setFeedClicked]);

    return (
        <header class="card" id="headerCard">
            <RedditLogo/>
            {feedClicked ? <Feed onClick = {() => setFeedClicked(!feedClicked)} /> : null}
            <FeedDropDown onClick={handleClick}/>
            <Search />
            <FeedButtons />
            <AdvertiseButton />
            <ProfileDropDown />
        </header>
    )
};
