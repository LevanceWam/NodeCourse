console.log('Before');
const user = getUser(1);
console.log(user);
console.log('After');

function getUser(id) {
    setTimeout(() => {
        console.log('Reading user from database');
        return {
            id: id,
            gitHubUsername: 'name'
        }
    }, 2000);

    return 1; // this is a just a lets say. an example of what we need to do not exactly what we need to do
}