function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(data => console.log(data))
}

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => displayUsers(json))
}
function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => console.log(json))
}

function displayUsers(json) {
    const ul = document.getElementById('users')
    for (const user of json) {
        const li = document.createElement('li');
        li.innerText = `name:${user.name}   email:${user.email}`;
        ul.appendChild(li);
    }
}


//practicing
function loadPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(pics => displayTitles(pics))
}

function displayTitles(pics) {
    const ul = document.getElementById('items')
    for (const item of pics) {
        const li = document.createElement('li');
        li.innerText = `albumId: ${item.albumId} title:${item.title}`;
        ul.appendChild(li);
    }
}