console.log('Before');
getUser(1, (user) => {
    getRepo(user.githubUsername, (repo) => {
        getCommits(repo[0], (commits) => {
            console.log(commits)
        });
    });
});
console.log('After');

// Promise-based Approach
getUser(1) // this returns a promise the result here is a user object 
    .then(user => getRepo(user.githubUsername))
    .then(repo => getCommits(repo[0]))
    .then(commits => console.log('Commits', commits))
    .catch(err => console.log('Error', err.message));

// Async and Await approach
async function displayCommits() {
    try {
        const user = await getUser(3); // returns a promise
        const repos = await getRepo(user.githubUsername);
        const commits = await getCommits(repos[0]);
        console.log(commits);
    } catch (err) {
        console.log('Error', err.message);
    }
}
displayCommits()

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