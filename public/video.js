const videosContainer = document.querySelector('.videos');

function createVideoElement(videoData) {
    const root = document.createElement('article');

    const titleP = document.createElement('p');
    titleP.textContent = videoData.title;

    const videoIframe = document.createElement('iframe');
    videoIframe.width = 640;
    videoIframe.height = 390;
    console.log(videoData.code)
    videoIframe.src = `https://youtube.com/embed/${videoData.code}`;
    videoIframe.frameborder = 0;
    videoIframe.allowFullscreen = true;


    root.append(titleP, videoIframe);

    return root;
}

async function fetchVideos() {
    return (await fetch('/api/video/all')).json();
}

async function displayVideos() {
    const videosData = await fetchVideos();

    const videoElements = videosData.map((videoData) => createVideoElement(videoData));
    videosContainer.append(...videoElements);
}

displayVideos();