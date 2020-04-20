FROM node:latest

WORKDIR /usr/src/app

LABEL author="bibek"

COPY package.json ./

RUN yarn install

COPY . .

EXPOSE 5000

CMD ["yarn","start"]
