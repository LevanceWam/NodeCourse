const request = require('supertest');
const {
    User
} = require('../../models/users');
const {
    Genre
} = require('../../models/genre');

let server;
describe('auth middleware', () => {
    beforeEach(() => {
        server = require('../../index');
    });
    afterEach(async () => {
        await Genre.remove({});
        await server.close();
    });

    let token;
    const exec = () => {
        return request(server)
            .post('/api/genre')
            .set('x-auth-token', token)
            .send({
                name: 'genre1'
            });
    }

    beforeEach(() => {
        token = new User().generateAuthToken();
    });

    it('should return 401 if no token is provided', async () => {
        token = '';
        const res = await exec();
        expect(res.status).toBe(401);
    });

    it('should return 400 if token is invalid', async () => {
        token = '1234';
        const res = await exec();
        expect(res.status).toBe(400);
    });

    it('should return 200 if valid token is provided', async () => {
        const res = await exec();
        expect(res.status).toBe(200);
    });
});