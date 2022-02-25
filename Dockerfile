FROM node

WORKDIR /usr/src/app

COPY . .
RUN npm install

CMD ["node", "./build/server.js"]