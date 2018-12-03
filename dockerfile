FROM node:8.11.1

WORKDIR /app

COPY package.json /app
COPY yarn.lock /app
RUN yarn

COPY /dist /app/dist

EXPOSE 3000

CMD yarn start:prod
