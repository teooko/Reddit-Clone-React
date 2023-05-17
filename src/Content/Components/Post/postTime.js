const date = new Date(2020, 4, 25, 0, 0, 0, 0);
const timestamp = new Date(posts[0].publishDate);

const msDiff = date.getTime() - timestamp.getTime();
const daysDiff = Math.floor(msDiff / (1000 * 60 * 60 * 24));
const hoursDiff = Math.floor(
    (msDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
);
