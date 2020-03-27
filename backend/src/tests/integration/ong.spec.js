const request = require('supertest');
const app = require('../../app');
const connection = require('../../database/connection');

describe('ONG', () => {
    beforeEach(async ()=>{
        await connection.migrate.rollback();
        await connection.migrate.latest();
    })

    afterAll(async ()=>{
        await connection.destroy;
    })

    it('create a new ong', async () => {
        const response = await request(app).post('/ongs').send({
            name: "Instituto Lima",
            email: "instituto@gmail.com",
            whatsapp: "96656-7575",
            city: "Fortaleza",
            uf: "CE"
        })
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    })
})