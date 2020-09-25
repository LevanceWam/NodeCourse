const {
    Rental
} = require('../../../models/rental');
const {
    User
} = require('../../../models/users');
const mongoose = require('mongoose');
const request = require('supertest');


describe('api/returns', () => {
    let server;
    let customerId;
    let movieId;
    let rental;
    let token;


    beforeEach(async () => {
        server = require('../../../index');

        customerId = new mongoose.Types.ObjectId();
        movieId = new mongoose.Types.ObjectId();
        token = new User().generateAuthToken();

        rental = new Rental({
            customer: {
                _id: customerId,
                name: '12345',
                phone: '12345'
            },
            movie: {
                _id: movieId,
                title: '12345',
                dailyRentalRate: 2
            }
        });

        await rental.save();
    });

    afterEach(async () => {
        await Rental.remove({});
        await server.close();
    });


    const exec = async () => {
        return await request(server)
            .post('/api/returns')
            .set('x-auth-token', token)
            .send({
                customerId,
                movieId
            });
    }

    it('should return 401 if the client is not logged in', async () => {
        token = '';
        const res = await exec();
        expect(res.status).toBe(401);
    });

    it('should return 400 if the customerId is not provided', async () => {
        customerId = '';
        const res = await exec();
        expect(res.status).toBe(400);
    });

    it('should return 400 if the movieId is not provided', async () => {
        movieId = '';
        const res = await exec();
        expect(res.status).toBe(400);
    });

    it('should return 404 if no Rental is not found for the customer/movie', async () => {
        await Rental.remove({});

        const res = await exec();

        expect(res.status).toBe(404);
    });

    it('should return 400 if Rental is already processed', async () => {
        rental.dateReturned = new Date();
        await rental.save();

        const res = await exec();
        expect(res.status).toBe(400);
    });

    it('should return 200 if we have the valid request', async () => {
        const res = await exec();
        expect(res.status).toBe(200);
    });

    it('should set returnDate if input is valid', async () => {
        await exec();

        const rentalInDb = await Rental.findById(rental._id);
        // expect(rentalInDb.dateReturned).toBeDefined();
        const diff = new Date() - rentalInDb.dateReturned;
        expect(diff).toBeLessThan(10 * 1000);
    });

}); // the end