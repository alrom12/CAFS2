// some comments
const messageApi = '/api/v1/message';

// EXTERNAL API
// const JSONPLACEHOLDER_URI = 'https://jsonplaceholder.typicode.com/posts';
// INTERNAL API
// const API = 'http://localhost:3000/api/v1/';

// *** Variables ***
//-- buttons
const btnGetTextFile = document.getElementById('btn1');
const btnGetUser = document.getElementById('btn2');
const btnGetUsers = document.getElementById('btn3');
const btnGetPosts = document.getElementById('btn4');
const btnSendPost = document.getElementById('btn5');
// //-- output
const textOutput = document.querySelector('#text');
const userOutput = document.querySelector('#user');
const usersOutput = document.querySelector('#users');
const postsOutput = document.querySelector('#posts');

// *** Functions ***
//OLD Version AJAX (XMLHttpRequest())
//-- Load Text File Information

function loadTextFileXHR() {
    console.log('kuku loadTextFileXHR');
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `http://${window.location.host}${messageApi}`, false);
    try {
        xhr.send();
        if (xhr.status === 200) {
            textOutput.textContent = xhr.responseText;
        } else {
            throw new Error('loadTextFileXHR Error', xhr.status);
        }
    } catch (error) {
        console.log(error);
    }
}

function loadTextFileFetch() {
    console.log('kuku loadTextFileFetch');
    fetch(`http://${window.location.host}${messageApi}`)
        .then(response => response.text())
        .then(text => textOutput.textContent = text)
        .catch(error => console.log(error));
}

//-- Load User Information
function loadUserXHR() {
  return;
}

//-- Load Users information
function loadUsersXHR() {
  return;
}

//-- Load Users information
function loadPostsXHR() {
  return;
}

//NEW VERSION AJAX (fetch())
// -- Getting data
function loadPostsFETCH() {
  return;
}

// -- Sending data
function sendPostFETCH() {
  return;
}
// *** Events ***
btnGetTextFile.addEventListener('click', loadTextFileXHR);
btnGetUser.addEventListener('click', loadUserXHR);
btnGetUsers.addEventListener('click', loadUsersXHR);
btnGetPosts.addEventListener('click', loadPostsXHR);
btnGetPosts.addEventListener('click', loadPostsFETCH);
btnSendPost.addEventListener('click', sendPostFETCH);

/*
    readyState Values:
    0: request not initialized
    1: server connection established
    2: request received
    3: processing request
    4: request finished and response is ready
    More: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState

    HTTP Statuses
    200: "OK"
    403: "Forbidden"
    404: "Not Found"
    More: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
*/
