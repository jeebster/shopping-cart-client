# Build
FROM node:lts-alpine AS builder

## Create app directory
WORKDIR /usr/src/app

## Install app dependencies
COPY package.json yarn.lock ./

RUN yarn install

## Bundle app source
COPY . .

# Forward traffic
EXPOSE 3000

## Start
CMD ["yarn", "start"]