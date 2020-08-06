console.log('Before');
getUser(1, displayRepos);
console.log('After');

function displayRepos(user) {
    getRepo(user.githubUsername, getCommits);
}

function getCommits(repo) {
    getCommits(repo, displayCommits);
}

function displayCommits(commits) {
    console.log(commits);
}

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading User from Database');
        callback({
            id: id,
            githubUsername: 'Jack'
        })
    }, 2000);
}

function getRepo(username, callback) {
    setTimeout(() => {
        console.log('Reading github API...');
        callback(['repo1', 'repo2', 'repo3'])
    }, 2000);
}