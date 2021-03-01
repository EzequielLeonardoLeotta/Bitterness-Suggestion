import request from 'supertest';
import server from '../../src/server/index';

describe('Test the health path, ', () => {
    let data: any;
    beforeAll(async () => {
        data = await request(server).get('/health');
    });

    test('it should response the GET method with status 200 and a body object', async () => {
        expect(data.status).toBe(200);
        expect(typeof data.body).toBe("object");
        expect(data.body.message).toBe("OK");
        expect(data.body.uptime).toBeGreaterThan(0);
    });
});
