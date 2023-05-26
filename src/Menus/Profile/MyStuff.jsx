import { Button } from "./Button"
import { SectionTitle } from "./SectionTitle"
import { faCircleUser } from "@fortawesome/free-regular-svg-icons"

export const MyStuff = () => {
    return (
        <>
            <SectionTitle icon={faCircleUser} title='My Stuff' />
            <Button title='Online Status' />
            <Button title='Profile' />
            <Button title='Create Avatar' />
            <Button title='User Settings' />
        </>
    )
}