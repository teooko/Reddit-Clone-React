import { Details } from "./Details"

export const Header = ({ title, subreddit, publishDate, firstName, lastName }) => {
    return (
        <div class="post">
            <Details subreddit={subreddit} publishDate={publishDate} firstName={firstName} lastName={lastName} />
            <div class="postTitle">{title}</div>
        </div>
    )
}
