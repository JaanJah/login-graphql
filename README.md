# Login system

A simple login system built as a GraphQL API

[API Documentation](USAGE.md)

# Setting up project

You need to have [Node.js](https://nodejs.org/en/), [Yarn](https://yarnpkg.com/) and [Docker](https://www.docker.com/) (Docker Engine 18.16.0 or above) installed to use this project.

```bash
# Install packages
yarn install

# Copy environment variables
cp .env.example .env

# Start database
docker-compose up -d

# Run database migrations (wait for docker database to come up first)
yarn migrate:up

# Start project
yarn start

# Build project
yarn build
```