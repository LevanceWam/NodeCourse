console.log('Before');
getUser(1, (user) => {
    getRepo(user.githubUsername, (repo) => {
        getCommits(repo[0], (commits) => {
            console.log(commits)
        });
    });
});
console.log('After');

getUser(1) // this returns a promise the result here is a user object 
    .then(user => getRepo(user.githubUsername))
    .then(repo => getCommits(repo[0]))
    .then(commits => console.log('Commits', commits))
    .catch(err => console.log('Error', err.message));

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading user from database');
            resolve({
                id: id,
                githubUsername: 'jack'
            }, 2000);
        });
    });
}

function getRepo(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('calling github Api');
            resolve(['repo1', 'repo2', 'repo3']);
        }, 2000);
    });
}

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling Github Api');
            resolve(['commits'])
        }, 2000);
    })
}