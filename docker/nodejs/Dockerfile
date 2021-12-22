FROM node:12-alpine

WORKDIR /app

RUN npm install -g light-server

ENTRYPOINT [ "light-server", "-s", "/app" ]