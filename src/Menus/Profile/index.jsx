import { faEye } from "@fortawesome/free-regular-svg-icons"
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import { SectionTitle } from "./SectionTitle"
import { Button } from "./Button"
import { IconButton } from "./IconButton"
import { MyStuff } from "./MyStuff"
import { Buttons } from "./Buttons"
import { useOutsideClick } from "../../Hooks/useOutsideClick"

export const Profile = ({ onClick }) => {
    const ref = useOutsideClick(onClick)

    return (
        <div class="userMenuOpen" tabIndex={0} ref={ref}>
            <MyStuff />
            <hr class="userMenuDivider" />
            <SectionTitle icon={faEye} title='View Options' />
            <Button title='Dark Mode' />
            <hr class="userMenuDivider" />
            <Buttons />
            <hr class="userMenuDivider" />
            <IconButton icon={faRightFromBracket} title={'Log Out'} />
            <div class="userMenuCopyright">&copy; 2023 Reddit, Inc. All rights reserved</div>
        </div>
    )
}