const usernameHeader = document.querySelector('#username');
const userPointsHeader = document.querySelector('#user_points');

const urlParams = new URLSearchParams(window.location.search);

async function fetchUser() {
    const username = urlParams.get('user');

    if (!username) return null;

    const userFetch = await fetch(`/api/user/${username}`);

    if (userFetch.status === 400) return null;

    return userFetch.json()
}

async function displayUser() {
    const user = await fetchUser();

    if (!user) return;

    usernameHeader.textContent = user.username;
    userPointsHeader.textContent = user.points;
}

displayUser()
