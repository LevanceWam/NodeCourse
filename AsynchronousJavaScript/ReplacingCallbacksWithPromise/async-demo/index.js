console.log('Before');
getUser(1, (user) => {
    getRepo(user.githubUsername, (repo) => {
        getCommits(repo[0], (commits) => {
            console.log(commits)
        });
    });
});
console.log('After');

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading user from database');
            resolve({
                id: id,
                githubUsername: 'WarMachine'
            });
        }, 2000);
    });
}

function getRepo(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('calling github API...')
            resolve({
                username: username,
                repos: ['repo1', 'repo2', 'repo3']
            });
        }, 2000);
    });
}

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling GitHub API...');
            resolve(['commit']);
        }, 2000);
    })
}