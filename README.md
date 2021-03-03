# Bitterness-Suggestion

_It's a microservice that returns bitterness suggestion._

## Starting 🚀

_These instructions will allow you to obtain a copy of the project running on your local machine for development and testing purposes._

### Pre-requirements 📋

_NodeJS_

_Postman_

### Executing 🔧

_First the project is required to be cloned on the pc_

_Then enter the project path by console and execute_

```
npm install
```

_Wait for the installation of the dependencies to finish and then run_

```
npm start
```

_In postman you can call the service with the route http://localhost:3000/findTwoBeers_

_For this a json is required as a parameter_

_For example:_

```
{
    "beers": [10, 15, 20], 
    "target": 30
}
```

## Executing tests ⚙️

_First the project is required to be cloned on the pc_

_Then enter the project path by console and execute_

```
npm run test-coverage
```

## What is the time and space complexity of your solution?
_The solution is really simple. Use two "for" to loop through the matrix and add the values ​​of i and j until you find that the sum matches the target. Whenever there is a result, I finalize the "for" and return the result. If none, I return an empty array._

## Built with 🛠️

* VS Code - IDE
* GitHub Dekstop - GitHub user interface

## Thank You 🎁
