# Reddit Clone in React

This practice project aims to recreate the home page of Reddit as of march 2023 in **React**. 

Check out my [other repository](https://github.com/teooko/Reddit-Clone-Vanilla) of the same page made in **pure html, css and javascript**. 

![Screenshot](screenshot.png)

View the website live [here](https://reddit-clone-react-gilt.vercel.app/).

# Technical Details

The page uses a social media mock api called [dummyapi.io](https://dummyapi.io/) and [Lorem Picsum](https://picsum.photos/) for subbreddit pictures. 

There are 5 posts added to the feed each time the user scrolls to the bottom of the page, thus making it an 'infinite scroller' page. 

Each api request is used to set the subreddit name and picture, username and number of upvotes, there is an additional request for the total number of comments.

# Setting up

Instructions on starting the website:

0. Node.js required
1. Create a `.env` file inside the **root** folder
2. Add the dummyapi key as an environment variable:
```
REACT_APP_API_KEY='your key'
```
3. Use the command `npm start` to open the page


