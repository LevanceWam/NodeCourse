const request = require('supertest')
const {
    Genre
} = require('../../models/genre');

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
})