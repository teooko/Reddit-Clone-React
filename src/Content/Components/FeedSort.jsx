import { FeedDisplayButton } from "./FeedDisplayButton"
import { FeedSortButtons } from "./FeedSortButtons"

export const FeedSort = () => {
    return (
        <div class="card" id="order">
            <FeedSortButtons />
            <FeedDisplayButton />
        </div>
    )
}