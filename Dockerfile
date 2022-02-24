FROM node
RUN apk --no-cache add --virtual builds-deps build-base python3
WORKDIR /usr/src/app

COPY . .
RUN npm install

CMD ["node", "./build/server.js"]