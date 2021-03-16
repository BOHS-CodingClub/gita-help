const videos = [
    {
        title: "Lecture 1",
        link: "https://www.youtube.com/watch?v=Xj_mciUH7Z4"
    }
];

// add ids to all the videos based on their titles
videos.forEach((video) => {
    // replace spaces in lowercased title with hyphens
    video.id = 
    video.title
    .toLowerCase()
    .split(/\s|%20/)
    .filter(Boolean)
    .join('-');
});

export default videos;