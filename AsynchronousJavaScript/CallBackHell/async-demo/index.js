console.log('Before');
getUser(1, (user) => {
    getRepo(user.githubUsername, (repo) => {
        getCommits(repo, (commits) => {
            // callback hell
        });
    });
});
console.log('After');

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading user from database');
        callback({
            id: id,
            githubUsername: 'WarMachine'
        });
    }, 2000);
}

function getRepo(username, callback) {
    setTimeout(() => {
        console.log('calling github API...')
        callback({
            username: username,
            repos: ['repo1', 'repo2', 'repo3']
        })
    }, 2000);
}