FROM node:16.14.0-alpine

WORKDIR /usr/src/next-app

RUN npm install -g create-next-app