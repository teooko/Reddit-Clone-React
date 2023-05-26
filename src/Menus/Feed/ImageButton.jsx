import avatarDefault from './avatarDefault.png'

export const ImageButton = ({title}) => {
    return (
        <div class="headerMenuDefaultButton">
            <img src={avatarDefault} class="headerMenuUser" />
            {title}
        </div>
    )
}