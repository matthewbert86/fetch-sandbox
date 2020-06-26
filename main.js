// Add event listener to listen for when the getText button is clicked 
document.getElementById('getText').addEventListener('click', getText)
// Add event listener for when getUsers is clicked
document.getElementById('getUsers').addEventListener('click', getUsers)
// Add event listener for when getPosts is clicked
document.getElementById('getPosts').addEventListener('click', getPosts)
// Add event listener for when addPost is clicked
document.getElementById('addPost').addEventListener('submit', addPost)

    function getText(){
       /* fetch('sample.txt')
        .then(function(res){
           return res.text()
        })
        .then(function (data) {
            console.log(data)
        }) */

        // This is the same as above, but in arrow functions
        // Lets get and display the info from sample.txt
        fetch('sample.txt')
        .then((res) => res.text())
        .then((data) => {
            // insert into DOM/Web Page
            document.getElementById('output').innerHTML = data
        })
        // This will help us to catch any errors
        .catch((err) => console.log(err))
    }

    // lets get the info from users.json
    function getUsers() {
        fetch('users.json')
        .then((res) => res.json())
        .then((data) => {
            let output = '<h2>Users</h2>';
            data.forEach(function(user){
                // for each iteration, we want to add on to that output variable
                // to do this we add a +=
                output += `
                    <ul>
                    <li>ID: ${user.id}</id>
                    <li>ID: ${user.name}</id>
                    <li>ID: ${user.email}</id>
                    </ul>
                `
            })
            // This will display the content pulled from output and display it when the button is clicked
            document.getElementById('output').innerHTML = output
        })
    }

// lets get the info from API
function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data) => {
            let output = '<h2>Posts</h2>';
            data.forEach(function (post) {
                // for each iteration, we want to add on to that output variable
                // to do this we add a +=
                output += `
                    <div>
                        <h3>${post.title}</h3>
                        <p>${post.body}</p>
                    </div>
                `;
            })
            // This will display the content pulled from output and display it when the button is clicked
            document.getElementById('output').innerHTML = output
        })
}

    // Let's add our posts we submit to the database
    function addPost(e) {
        // this prevents it from getting added to a file
        e.preventDefault();

        let title = document.getElementById('title').value;
        let body = document.getElementById('body').value;

        fetch('https://jsonplaceholder.typicode.com/posts', {
            // This is an object with some stuff we need for the posts
            method: 'POST',
            // headers is going to be another object
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-type': 'application/json'
            },
            // This will convert the content to a string before it sends
            body: JSON.stringify({ title: title, body: body })
        })
        // This is where we are sending the data, which is the posts we add. In this case, itll be in console.log
            .then((res) => res.json())
            .then((data) => console.log(data))
    }