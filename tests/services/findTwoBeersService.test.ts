import {findTwoBeers} from '../../src/services/findTwoBeers';

const beers = [10, 15, 20];

describe('Find Two Beers Test', () => {
    test('The suggestion return only array with two integer values', async () => {
        const target = 30;
        // @ts-ignore
        expect(findTwoBeers(beers, target)).toStrictEqual([0, 2]);
    });

    test('The suggestion return only empty array where the target not match', async () => {
        const target = 40;
        // @ts-ignore
        expect(findTwoBeers(beers, target)).toStrictEqual([]);
    });
});