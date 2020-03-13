# shopping-cart-client
Single page shopping cart application, authored in [React](https://reactjs.org/).
This application leverages data from [shopping-cart-server](https://github.com/jeebster/shopping-cart-server)

## Instructions

This application can be run in a docker container or locally

### Docker
This application includes [Docker](https://www.docker.com/get-started) configuration for building/running the client

#### Connect with API Server

Edit the `REACT_APP_API_URL` environment variable in the `.env` file to match the URL of your [shopping-cart-server](https://github.com/jeebster/shopping-cart-server) container

### Build the Docker image

```docker build -t jeebster/shopping-cart-client .```

### Run the Docker image

```docker run -p ${YOUR_PORT_OF_CHOICE}:3000 -e CHOKIDAR_USEPOLLING=true -d jeebster/shopping-cart-client```

The server should now be running at `http://localhost:${YOUR_PORT_OF_CHOICE}`

### Local
Edit the `REACT_APP_API_URL` environment variable in the `.env` file to match the URL of your [shopping-cart-server](https://github.com/jeebster/shopping-cart-server) local application

With NPM
```
npm install
npm start
```

With Yarn
```
yarn install
yarn start
```

## Tests
Invoke `yarn test` to run the test suite

**NOTE:** Due to time constraints, tests were not fully completed; not all tests will pass

## Notes

* Product quantity changes are not reflected relative to presence in shopping cart. This is a UX design decision - a product's quantity should change only after an order has been completed/authorized
* Components make use of [Hooks](https://reactjs.org/docs/hooks-reference.html). State is persisted via [Context](https://reactjs.org/docs/hooks-reference.html#usecontext)