console.log('Before');
getUser(1, (user) => {
    getRepo(user.gitUsername, (repos) => {
        console.log('Displaying Repo:', repos);
    });
});
console.log('After');

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading User from Database');
        callback({
            id: id,
            gitUsername: 'Jack'
        });
    }, 2000);
}

function getRepo(username, callback) {
    setTimeout(() => {
        callback({
            name: username,
            repos: ['repo1', 'repo2', 'repo3']
        });
    }, 2000);
}











// ___________________________

// this was the code on line 2 before we put the exercise at the top

getUser(2, (user) => {
    console.log('User:', user)
});

// this is the code we need to convert in the exercise

function getRep(repo) {
    return ['repo1', 'repo2', 'repo3']
}