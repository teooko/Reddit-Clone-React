import { faBullhorn, faCoins, faShieldHalved, faHighlighter, faCircleQuestion, faCircleInfo, faFileLines } from "@fortawesome/free-solid-svg-icons"

import { Button } from "./Button";
import { IconButton } from "./IconButton";

export const Buttons = () => {
    return (
        <>
            <IconButton icon={faBullhorn} title={'Advertise on Reddit'} />
            <IconButton icon={faCoins} title={'Coins'} />
            <IconButton icon={faShieldHalved} title={'Premium'} />
            <IconButton icon={faHighlighter} title={'Explore'} />
            <IconButton icon={faCircleQuestion} title={'Help Center'} />
            <IconButton icon={faCircleInfo} title={'More'} />
            <IconButton icon={faFileLines} title={'Terms & Policies'} />
            <Button title={'User Agreement'} />
            <Button title={'Privacy Policy'} />
            <Button title={'Content Policy'} />
            <Button title={'Moderator Code of Conduct'} />
        </>
    )
}