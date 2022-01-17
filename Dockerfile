FROM node:14-alpine

RUN mkdir /home/node/app/ && chown -R node:node /home/node/app
WORKDIR /home/node/app

COPY package*.json ./
RUN chown node:node package.json && chown node:node package-lock.json
RUN npm ci --only=production && npm cache clean --force

COPY . .
RUN chown -R node:node .

ENV APP_PORT=3000
EXPOSE 3000

USER node

CMD ["npm", "run", "start"]
