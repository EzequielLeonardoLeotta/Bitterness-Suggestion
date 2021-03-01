import {findTwoBeersRoute} from '../../src/controllers/findTwoBeers';
import * as service from '../../src/services/findTwoBeers';
import {Request, Response} from 'express';

const mockService = {
    findTwoBeersService: jest.fn().mockReturnValue(Promise.resolve({status: 200, data: 'mockedData'})),
};
beforeEach(() => {
    jest.spyOn(service, 'findTwoBeersService').mockImplementation(mockService.findTwoBeersService);
});

test('findTwoBeersRoute call service with req and res', () => {
    const req = (jest.fn() as unknown) as Request;
    const res = (jest.fn() as unknown) as Response;
    findTwoBeersRoute(req, res).then(() => {
        expect(mockService.findTwoBeersService).toHaveBeenCalledWith(req, res);
    });
});