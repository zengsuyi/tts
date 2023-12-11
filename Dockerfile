FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm ci --only=production

EXPOSE 3035

CMD [ "npm", "start" ]
