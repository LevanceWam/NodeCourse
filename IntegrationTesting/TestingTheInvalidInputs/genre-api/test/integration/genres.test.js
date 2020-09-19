const request = require('supertest')
const {
    Genre
} = require('../../models/genre');
const {
    User
} = require('../../models/user');
const mongoose = require('mongoose');


let server;

describe('/api/genres', () => {
    beforeEach(() => {
        server = require('../../index');
    });
    afterEach(async () => {
        server.close()
        await Genre.remove({});
    });

    describe('GET /', () => {
        it('should return all genres', async () => {
            await Genre.collection.insertMany([{
                    name: 'genre1'
                },
                {
                    name: 'genre2'
                }
            ]);

            const res = await request(server).get('/api/genre');
            expect(res.status).toBe(200);
            expect(res.body.length).toBe(2);
            expect(res.body.some(g => g.name === 'genre1')).toBeTruthy();
            expect(res.body.some(genre => genre.name === 'genre2')).toBeTruthy();
        });

    });

    describe('GET /:id', () => {
        it('should return a genre if valid id is passed', async () => {
            const genre = new Genre({
                name: 'genre1'
            });
            await genre.save();

            const res = await request(server).get('/api/genre/' + genre._id);

            expect(res.status).toBe(200);
            expect(res.body).toHaveProperty('name', genre.name);
        });

        it('should return 404 if invalid id is passed', async () => {
            const res = await request(server).get('/api/genre/1');

            expect(res.status).toBe(404);
        });
    });

    describe('POST /', () => {
        it('should return 401 if client is not logged in', async () => {
            const res = await request(server)
                .post('/api/genre')
                .send({
                    name: 'genre1'
                });

            expect(res.status).toBe(401);
        });

        it('should return 400 if genre is less than 5 character', async () => {
            const token = new User.generateAuthToken();

            const res = await request(server)
                .post('/api/genre')
                .set('x-auth-token', token)
                .send({
                    name: '1234'
                });

            expect(res.status).toBe(400);
        });

        it('should return 400 if genre is more than 50 character', async () => {
            const token = new User.generateAuthToken();

            const name = new Array(52).join('a');

            const res = await request(server)
                .post('/api/genre')
                .set('x-auth-token', token)
                .send({
                    name: name
                });

            expect(res.status).toBe(400);
        });
    });
});