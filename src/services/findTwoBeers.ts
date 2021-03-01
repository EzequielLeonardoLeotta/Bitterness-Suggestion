import {Request, Response} from 'express';

export const findTwoBeersService = (req: Request, res: Response) => {
    const beers = req.body.beers as unknown as number[];
    const target = req.body.target as unknown as number;
    beers && target && !beers.some(v => v < 1)
        ? res.status(200).send(findTwoBeers(beers, target))
            : res.status(400).send("Bad Request")
};

export const findTwoBeers = (beers: number[], target: number): number[] => {
    let result: number[] = [];
    const arrayLength = beers.length;
    for (let i = 0; i < arrayLength && result !== []; i++) {
        for (let j = 0; j < arrayLength  && result !== []; j++) {
            if (i !== j && beers[i] + beers[j] === target) {
                result = [i, j].sort();
            } 
        }
    }
    return result;
}