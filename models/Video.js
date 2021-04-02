const Video = [
    {
        title: 'Lecture 2',
        code: '2JyI-9BtHg0',
    },
    {
        title: 'Lecture 1',
        code: 'Xj_mciUH7Z4',
    },
];

// add ids to all the videos based on their titles
Video.forEach((video) => {
    // replace spaces in lowercased title with hyphens
    video.id = 
    video.title
    .toLowerCase()
    .split(/\s|%20/)
    .filter(Boolean)
    .join('-');
});

export default Video;