
const postTime = publishDate => {
    const date = new Date(2020, 4, 25, 0, 0, 0, 0);
    const timestamp = new Date(publishDate);

    const msDiff = date.getTime() - timestamp.getTime();
    const daysDiff = Math.floor(msDiff / (1000 * 60 * 60 * 24));

    if (Math.abs(daysDiff) > 0) {
        if (daysDiff === 1)
            return daysDiff + ' day ago'

        return daysDiff + ' days ago'
    }

    const hoursDiff = Math.floor(
        (msDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    if (hoursDiff === 1)
        return hoursDiff + ' hour ago'

    return hoursDiff + ' hours ago'
}

export const PostTime = ({publishDate}) => {
    return (
        <div class="timePosted">{
            postTime(publishDate)
        }</div>
    )
}
