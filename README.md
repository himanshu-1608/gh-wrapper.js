# gh-wrapper.js

This will be an npm module which acts as a wrapper between GitHub's Octocat REST API and an end-user.

Will work in the same way as express.js works- ***Less Technicality, Better Output***

It will wrap the Octocat REST API from doing this:
```
const todo = {
    title: 'some really important shit',
    event_type: 'bigBrain',
    client_payload: 'secret data of Musk's show-meme-conquer-world strategy'
};

const result = fetch( ('https://api.github.com//repos/{owner}/{repo}/dispatches', {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then(response => response.json())
    .then(json => {
        console.log(json);
    });
```
to doing this: 
```
const todo = {
    title: 'some really easy shit',
    event_type: 'smartWork',
    client_payload: 'payload is a NASA-related keyword'
};

const result = ghClient.postDispatch(todo)
console.log(result)
```
Originally, this wrapper is being developed for the sole purpose of creating resume through accessing the projects and other basic details of a user.

However, I may extend it, if nature says so.
