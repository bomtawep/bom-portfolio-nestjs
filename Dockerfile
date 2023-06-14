FROM node:16.13.1-alpine3.14

WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json", "tsconfig.json", "./"]
COPY ./src ./src
COPY ./images ./images
COPY ./dist ./dist
RUN yarn install

EXPOSE 8080
CMD yarn start:prod