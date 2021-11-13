FROM node:14

WORKDIR /Backend/src

COPY package*.json ./

RUN npm install

EXPOSE 4000

CMD ["npm", "run", "dev"]