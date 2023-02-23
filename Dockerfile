###########
# Builder #
###########

#pull official base image
FROM node:16.5.0-alpine as Builder

WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json .
COPY package-lock.json .
RUN npm ci

COPY . .
