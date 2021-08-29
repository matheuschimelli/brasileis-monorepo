FROM node:14-alpine


WORKDIR /usr/src/app
RUN apk add --update alpine-sdk && apk add linux-headers
RUN apk add --update --no-cache python3 && ln -sf python3 /usr/bin/python


ENV NODE_ENV production

COPY package.json ./

RUN npm i --production

COPY . .

RUN npm run build


CMD [ "npm", "start" ]
USER node