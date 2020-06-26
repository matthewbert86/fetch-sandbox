function addPost(e) {
    // this prevents it from getting added to a file
    e.preventDefault();


let title = document.getElementById('title').value
    let body = document.getElementById('body').value

    fetch('https://jsonplaceholder.typicode.com/posts', {
        // This is an object with some stuff we need for the posts
        method: 'POST',
        // headers is going to be another object
        headers: {
            'Accept': 'application/json, text/plain, */*', 'Content-type': 'application/json'
        },
        // This will convert the content to a string before it sends
        body:JSON.stringify({title:title, body:body})
    })
    .then((res) => res.json())
    // This is where we are sending the data, which is the posts we add. In this case, itll be in console.log
    .then((data) => console.log(data))
}